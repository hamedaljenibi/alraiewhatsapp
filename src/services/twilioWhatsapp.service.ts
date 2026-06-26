import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export const sendTwilioMessage = async (to: string, bodyText: string) => {
    console.log("@@@@@@@ Sending Twilio Message to:", to, "Body:", bodyText);
  try {
    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER, // Must be 'whatsapp:+1...'
      to: to.startsWith('whatsapp:') ? to : `whatsapp:${to}`,
      body: bodyText,
    });
  } catch (error) {
    console.error('Twilio Send Error:', error);
  }
};

/**
 * Formats interactive chatbot menus into standard text options 
 * to bypass sandbox interactive button limitations.
 */
export const sendTwilioMenu = async (
  to: string, 
  messageTitle: string, 
  buttons: { id: string; label: string }[]
) => {
  let structuredBody = `${messageTitle}\n\n`;
  
  buttons.forEach((button, index) => {
    structuredBody += `*${index + 1}⃣  ${button.label}*\n`;
  });

  structuredBody += `\n_Reply with the option name or number to navigate._`;

  await sendTwilioMessage(to, structuredBody);
};