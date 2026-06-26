import { Router } from 'express';
import { authenticate } from '../middleware/authMiddleware';
// import { setUserLanguage } from '../middleware/setUserLanguage';
import { subscriptionContext } from '../middleware/subscriptionContext';
import { chatbot } from '../controllers/chatbot.controller';

export const chatbotRouter = Router();
chatbotRouter.use(authenticate);
// chatbotRouter.use(setUserLanguage);
chatbotRouter.use(subscriptionContext);
chatbotRouter.post('/', chatbot);