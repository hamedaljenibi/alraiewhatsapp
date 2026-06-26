import { Router } from 'express';
import healthRoutes from './health.route';
import { metricsEndpoint } from '../utils/metrics';
import { chatbotRouter } from './chatbot.route';
import { whatsappRouter } from './whatsapp.routes';
import { twilioRouter } from './twilio.routes';

const router = Router();

router.use('/', healthRoutes);
router.use("/chatbot",chatbotRouter)
router.use("/whatsapp",whatsappRouter)
router.use("/twilio",twilioRouter)
router.get(
  '/metrics',
  metricsEndpoint,
);

/*
future routes

router.use('/auth', authRouter)
router.use('/animals', animalRouter)

*/

export default router;