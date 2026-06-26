import { Request, Response } from 'express';
import UserModel from '../models/user';
import { processChatbotInteraction } from '../services/coreChatbot.service';
import { sendTwilioMessage, sendTwilioMenu } from '../services/twilioWhatsapp.service';
import { getChatbotNode } from '../services/chatbot.service';
import { Language } from '../types/chatbot.types';

// 🧠 IN-MEMORY STATE TRACKER (For Testing)
// In production, add a `currentBotNode` string field to your UserModel instead.
const userSessionState = new Map<string, string>();

export const handleTwilioWebhook = async (req: Request, res: Response) => {
  try {
    // 🔐 Note: Twilio posts data as Form/Urlencoded, mapped to req.body
    const From = req?.body?.From;
    const Body = req?.body?.Body;

    if (!From || !Body) {
      return res.status(400).send('Missing Twilio payload parameters.');
    }

    // Acknowledge Twilio immediately with empty TwiML to prevent timeouts/retries
    res.type('text/xml');
    res.send('<Response></Response>');

const cleanPhoneNumber = From.replace('whatsapp:', '').trim();
const safePhoneString = cleanPhoneNumber.replace(/\+/g, '\\+');

// 1. Identify User in Database
const user = await UserModel.findOne({ fullPhone: { $regex: new RegExp(safePhoneString + '$') } });

    if (!user) {
      await sendTwilioMessage(
        From,
        'Welcome to ALRAIE! Please register in the mobile app first to use the WhatsApp assistant.\n\nمرحباً بك في الراعي! يرجى التسجيل في التطبيق أولاً لاستخدام مساعد الواتساب.'
      );
      return;
    }

    const userId = user._id.toString();
    const language: Language = (user as any).language === 'ar' ? 'ar' : 'en';
    const subscription = (user as any).subscription || null;

    const incomingText = Body.trim();
    let input: { type: 'text' | 'node'; payload: string } = { type: 'text', payload: incomingText };

    // 2. Fetch the user's LAST KNOWN state (Default to ROOT)
    const lastNodeId = userSessionState.get(userId) || "CHATBOT_ROOT";
    const lastNode = await getChatbotNode(lastNodeId, language);

    // 3. Handle Menu Navigation (Numbers or Explicit Option text)
    let selectedNodeId = null;

    if (lastNode && lastNode.buttons) {
      const selectionIndex = parseInt(incomingText, 10) - 1;
      
      // If user typed a number
      if (!isNaN(selectionIndex) && lastNode.buttons[selectionIndex]) {
        selectedNodeId = lastNode.buttons[selectionIndex].id;
        input = { type: 'node', payload: selectedNodeId };
      } 
      // If user typed the exact text label
      else {
        const exactMatch = lastNode.buttons.find(
          (b:any) => b.label?.toLowerCase() === incomingText.toLowerCase()
        );
        if (exactMatch) {
          selectedNodeId = exactMatch.id;
          input = { type: 'node', payload: selectedNodeId };
        }
      }
    }

    // 4. Run Core Routing Logic
    const responseData = await processChatbotInteraction(
      userId,
      subscription,
      language,
      input
    );

    // 5. UPDATE STATE FOR NEXT MESSAGE
    // If we resolved to a menu, save that menu's ID so the next number press works!
    if (responseData.type === 'menu') {
      // If it was a button click, save the button's ID. 
      // If AI routed them to ROOT, reset to ROOT.
      userSessionState.set(userId, selectedNodeId || "CHATBOT_ROOT"); 
    } else {
      // If it's text or redirect, they reached the end of a flow. 
      // Reset back to main menu for their next interaction.
      userSessionState.set(userId, "CHATBOT_ROOT"); 
    }

    // 6. Send Message Back through Twilio Channel
    if (responseData.type === 'error' || responseData.type === 'text') {
      await sendTwilioMessage(From, responseData.message as string);
    } 
    else if (responseData.type === 'menu' && responseData.buttons) {
      const title = (responseData.message as any) || (language === 'ar' ? 'يرجى الاختيار من القائمة:' : 'Please select from the menu:');
      await sendTwilioMenu(From, title, responseData.buttons);
    } 
    else if (responseData.type === 'redirect') {
      const link = responseData.redirectWeb || 'https://alraie.net';
      await sendTwilioMessage(From, `${responseData.message}\n\n🔗 ${link}`);
    }

  } catch (error) {
    console.error('Twilio Webhook Processing Failure:', error);
  }
};