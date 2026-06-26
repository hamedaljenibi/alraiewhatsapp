import express, { Router } from 'express';
import { verifyWebhook, handleWebhook } from '../controllers/whatsapp.controller';

export const whatsappRouter = Router();

// Used strictly for Meta App Dashboard configuration
whatsappRouter.get('/webhook', verifyWebhook);

// Handles all incoming messages from users
whatsappRouter.post('/webhook', 
    handleWebhook);