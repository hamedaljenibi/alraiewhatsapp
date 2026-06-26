import { Request, Response } from 'express';
import { getChatbotNode } from '../services/chatbot.service';
import { detectUserIntent } from '../services/aiIntent.service';
import { sendWhatsAppText, sendWhatsAppInteractive } from '../services/whatsapp.service';
import UserModel from '../models/user'; 
import { resolveAIIntent } from '../services/aiDataResolver.service';

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;

// GET: Webhook Verification for Meta
export const verifyWebhook = (req: Request, res: Response) => {
  console.log('Webhook verification request received:', req.query);
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    }
    return res.sendStatus(403);
  }
  return res.sendStatus(400);
};

// POST: Incoming Messages
export const handleWebhook = async (req: Request, res: Response) => {
  console.log("Incoming WhatsApp Webhook Payload:", JSON.stringify(req.body, null, 2));

  try {
    const { body } = req;

    // Acknowledge receipt immediately to prevent Meta from retrying
    res.sendStatus(200);

    if (body.object !== 'whatsapp_business_account') return;

    const entry = body.entry?.[0];
    const changes = entry?.changes?.[0];
    const message = changes?.value?.messages?.[0];

    if (!message) return;

    const fromPhone = `+${message.from}`; // e.g., '1234567890'
    const msgType = message.type;

    // 1. Authenticate / Identify User by Phone
    // Adjust this query based on how phone numbers are stored (e.g., with or without country code)
    const user = await UserModel.findOne({ fullPhone: fromPhone });
    
    // Default fallback language if user isn't found
    const lang = user?.language === 'ar' ? 'ar' : 'en'; 

    let incomingText = '';
    let nodeId = '';

    // 2. Parse Incoming Payload
    if (msgType === 'text') {
      incomingText = message.text.body;
    } else if (msgType === 'interactive') {
      if (message.interactive.type === 'button_reply') {
        nodeId = message.interactive.button_reply.id;
      } else if (message.interactive.type === 'list_reply') {
        nodeId = message.interactive.list_reply.id;
      }
    }

    // 3. Handle Free Text (AI Intent)
    if (msgType === 'text') {
      if (incomingText.length > 1000) {
        await sendWhatsAppText(fromPhone, lang === 'ar' ? 'الرسالة طويلة جداً' : 'Message too long');
        return;
      }

      const intentData = await detectUserIntent(incomingText);

      // Check if user is asking a specific AI question vs a general greeting
      if (intentData.confidence >= 0.5 && intentData.intent !== 'UNKNOWN') {
      if (user) {
        const aiResponse = await resolveAIIntent(user._id.toString(), intentData, null, lang); //need to fix later
        if (aiResponse) {
          await sendWhatsAppText(fromPhone, aiResponse);
          } else {
            await sendWhatsAppText(fromPhone, lang === 'ar' ? 'لم أتمكن من العثور على معلومات.' : 'Could not find information.');
          }
          return; // End flow after successful AI response
        } else {
          await sendWhatsAppText(
            fromPhone, 
            lang === 'ar' 
              ? 'يرجى تسجيل الدخول أو إنشاء حساب للوصول إلى الميزات الذكية.' 
              : 'Please log in or create an account to access AI features.'
          );
          nodeId = 'ACCOUNT_LOGIN'; 
        }
      } else {
        nodeId = 'CHATBOT_ROOT';
      }
    }

    // 4. Fetch Node Data (All nodes accessible to everyone)
      const targetNode = nodeId || 'CHATBOT_ROOT';
      const result = await getChatbotNode(targetNode, lang);

      if (!result.success) {
        await sendWhatsAppText(fromPhone, result.message || 'Error loading menu.');
        return;
      }

      // Handle HTML/API responses (WhatsApp doesn't render HTML natively)
      if (result.type === 'html' || result.type === 'redirect') {
        const linkText = result.redirectWeb ? `\n🔗 ${result.redirectWeb}` : '';
        await sendWhatsAppText(fromPhone, `${result.message || ''}${linkText}`);
        return;
      }

      // Send Menu Options
      if (result.buttons && result.buttons.length > 0) {
        await sendWhatsAppInteractive(fromPhone, result.message || 'Menu', result.buttons as any, lang);
      } else if (result.message) {
        await sendWhatsAppText(fromPhone, result.message);
    }

} catch (error: any) {
    // Enhanced logging to catch Meta's API rejection details
    if (error.isAxiosError && error.response) {
      console.error('Meta API Rejection:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.error('WhatsApp Webhook Error:', error);
    }
  }
};