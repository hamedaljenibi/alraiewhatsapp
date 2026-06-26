import { getChatbotNode } from './chatbot.service';
import { detectUserIntent } from './aiIntent.service';
import { resolveAIIntent } from './aiDataResolver.service';
import { Language } from '../types/chatbot.types';

/**
 * Shared service to process chatbot interactions for any channel (HTTP/WhatsApp/Twilio).
 */
export const processChatbotInteraction = async (
  userId: string,
  subscription: any,
  language: Language,
  input: { type: 'text' | 'node'; payload: string }
) => {
  // 1. Handle free-text inputs (AI Intent)
  if (input.type === 'text') {
    const message = input.payload;

    if (message.length > 1000) {
      return { 
        type: 'error', 
        message: language === 'ar' ? 'الرسالة طويلة جداً' : 'Message too long' 
      };
    }

    const intentData = await detectUserIntent(message);

    // If intent is low confidence or unknown, just return a default fallback message
    if (intentData.confidence < 0.5) {
      return { 
        type: 'text', 
        message: language === 'ar' ? 'عذراً، لم أفهم طلبك. هل يمكنني مساعدتك بشيء آخر؟' : 'Sorry, I did not understand. How else can I help?' 
      };
    }

    const aiResponse = await resolveAIIntent(userId, intentData, subscription, language);

    if (aiResponse) {
      return { type: 'text', message: aiResponse };
    }
    
    // Fallback if AI intent resolved but returned no data
    return await getChatbotNode("CHATBOT_ROOT", language);
  }

  // 2. Handle Menu/Button click navigations
  const nodeId = input.payload || "CHATBOT_ROOT";
  const result = await getChatbotNode(nodeId, language);

  if (!result) {
    return { 
      type: 'error', 
      message: language === 'ar' ? 'لم يتم العثور على القائمة المطلوبة' : 'Menu option not found' 
    };
  }

  return result;
};