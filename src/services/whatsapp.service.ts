import axios from 'axios';

// Update internal type alignment since getChatbotNode flattens the language mapping
export interface FlattenedChatbotButton {
  id: string;
  label: string; 
}

const WA_TOKEN = process.env.WHATSAPP_TOKEN;
const WA_PHONE_ID = process.env.WHATSAPP_PHONE_ID;
const WA_API_URL = `https://graph.facebook.com/v25.0/${WA_PHONE_ID}/messages`;

export const sendWhatsAppText = async (to: string, text: string) => {
  return axios.post(
    WA_API_URL,
    {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to,
      type: 'text',
      text: { preview_url: false, body: text },
    },
    { headers: { Authorization: `Bearer ${WA_TOKEN}` } }
  );
};

export const sendWhatsAppInteractive = async (
  to: string,
  messageText: string,
  buttons: FlattenedChatbotButton[],
  lang: 'en' | 'ar'
) => {
  // Edge Case: Meta allows max 3 buttons. 
  // If > 3 buttons, we MUST use a List Message.
  if (buttons.length > 3) {
    return sendWhatsAppList(to, messageText, buttons, lang);
  }

  const interactiveButtons = buttons.map((b) => ({
    type: 'reply',
    reply: {
      id: b.id,
      // Meta limits quick-reply title to 20 chars safely
      title: b.label ? b.label.substring(0, 20) : '', 
    },
  }));

  return axios.post(
    WA_API_URL,
    {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to,
      type: 'interactive',
      interactive: {
        type: 'button',
        body: { text: messageText },
        action: { buttons: interactiveButtons },
      },
    },
    { headers: { Authorization: `Bearer ${WA_TOKEN}` } }
  );
};

const sendWhatsAppList = async (
  to: string,
  messageText: string,
  buttons: FlattenedChatbotButton[],
  lang: 'en' | 'ar'
) => {
  // Edge Case: Meta limits list rows to 10 max.
  const safeButtons = buttons.slice(0, 10);

  const rows = safeButtons.map((b) => ({
    id: b.id,
    // Meta limits row title to 24 chars
    title: b.label ? b.label.substring(0, 24) : '', 
  }));

  return axios.post(
    WA_API_URL,
    {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to,
      type: 'interactive',
      interactive: {
        type: 'list',
        header: { type: 'text', text: lang === 'ar' ? 'القائمة' : 'Menu' },
        body: { text: messageText },
        action: {
          button: lang === 'ar' ? 'خيارات' : 'Options',
          sections: [{ title: lang === 'ar' ? 'اختر' : 'Select', rows }],
        },
      },
    },
    { headers: { Authorization: `Bearer ${WA_TOKEN}` } }
  );
};