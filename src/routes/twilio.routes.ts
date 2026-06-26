import { Router } from 'express';
import { handleTwilioWebhook } from '../controllers/twilioWhatsapp.controller';

export const twilioRouter = Router();

// Twilio webhooks are strictly POST requests
twilioRouter.post('/webhook', handleTwilioWebhook);