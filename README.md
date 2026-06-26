# Alraie Backend API

Backend service for the **Alraie Platform**, designed to support intelligent chatbot interactions, and WhatsApp automation.

Built with **Node.js**, **Express**, **TypeScript**, and **MongoDB**, AI-powered intent detection for conversational queries.

---

## Overview

Alraie is a backend system allows animal owners and assistants to manage animals, GPS devices, subscriptions, orders, and interact through an AI-powered chatbot available through both API and WhatsApp.

The system supports:

* AI-powered chatbot
* WhatsApp business integration
* Metrics and monitoring

---

## Tech Stack

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MongoDB
* Mongoose ODM

### AI Integration

* OpenAI API for intent classification

### Infrastructure

* REST API architecture
* Express middleware pipeline
* Rate limiting
* Request tracing
* Graceful shutdown handling

### Monitoring

* Prometheus metrics
* Request performance monitoring

### Security

* Helmet
* CORS
* Express Rate Limiter

---

## Core Features

### 1. AI Chatbot Engine

Example supported queries:

```text
How many animals do I have?

Show animal #AN-12345

Where is my animal #AN-12345

Show latest order

GPS details #GPS12345
```

The chatbot uses AI intent detection and routes requests to internal data resolvers.

Supported AI intents:

* Get total animals
* Get male/female animals
* Get animal details
* Get animal location
* Get GPS device details
* Get latest order
* Track latest order
* Get order by ID
* Get subscription details
* Get quota information

---

### 2. WhatsApp Integration

Users can interact directly through WhatsApp.

Supported flows:

* Interactive chatbot menus
* Button-based navigation
* List-based menus
* AI question answering
* Automated text responses

The webhook processes incoming WhatsApp messages and returns dynamic responses.

## Live Deployment

Production API URL

https://bot.alraie.net

Endpoint:

```text
GET /metrics
```

---

## Project Structure

```text
src/
 ├── config/
 ├── controllers/
 ├── database/
 ├── jobs/
 ├── middleware/
 ├── models/
 ├── routes/
 ├── services/
 ├── topics/
 ├── types/
 ├── utils/
 ├── app.ts
 └── server.ts
```

---

## API Routes

### Health Check

```http
GET /
```

Response:

```json
{
  "success": true,
  "message": "API running"
}
```

---

### Chatbot API

```http
POST /chatbot
```

Protected route.

Supports:

* Menu navigation
* AI intent-based requests
* Subscription-aware responses

---

### WhatsApp Webhook

```http
GET /whatsapp/webhook
POST /whatsapp/webhook
```

Handles incoming WhatsApp business messages.

---

### Metrics Endpoint

```http
GET /metrics
```

Returns Prometheus monitoring metrics.

---

## Security Layer

Security middleware enabled:

* Helmet security headers
* CORS policy
* Request compression
* Rate limiting
* Request ID tracking
* Global error handling
* 404 middleware protection

---

## Environment Variables

Create a `.env` file in the project root and configure the following variables.

```env
# Application Environment
NODE_ENV=development        # development | production | test

# Database Connections
MONGO_URI_PROD=your_production_mongodb_connection
MONGO_URI_DEV=your_development_mongodb_connection

# Authentication
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret

# AI Integration
OPENAI_API_KEY=your_openai_api_key

# WhatsApp Business API
WHATSAPP_TOKEN=your_whatsapp_access_token

WHATSAPP_PHONE_ID=your_whatsapp_phone_number_id

WHATSAPP_VERIFY_TOKEN=your_webhook_verify_token
```

### Example

```env
NODE_ENV=development

MONGO_URI_PROD=mongodb://production-db-url
MONGO_URI_DEV=mongodb://localhost:27017/alraie-dev

JWT_SECRET=your-secret-key
JWT_REFRESH_SECRET=your-refresh-secret-key

OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxx

WHATSAPP_TOKEN=EAAGxxxxxxxxxxxxxxxx
WHATSAPP_PHONE_ID=123456789012345
WHATSAPP_VERIFY_TOKEN=verify_token_here
```

**Important:** Never commit your actual `.env` file to GitHub.
Only upload a `.env.example` file with placeholder values for security.

---

## Installation

Clone repository

```bash
git clone <repository_url>
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build project

```bash
npm run build
```

Run production build

```bash
npm start
```

---

## Available Scripts

```bash
npm run dev
npm run build
npm start
npm run lint
npm run lint:fix
npm run format
```

---

## Architecture Highlights

The project follows a modular architecture with separation of concerns.

Key design patterns:

* Controller-Service architecture
* Middleware-based request pipeline
* AI intent classification layer
* Resolver-based business logic execution
* Modular route management
* Scalable Express application structure

---

## Future Improvements

Planned improvements:

* Advanced AI conversation context memory
* Web dashboard for chatbot management
* Audit logging system

---

## Demo

The project is currently deployed and accessible in production.

### Live Deployment

```text
https://bot.alraie.net
```

### Demo Resources

For project demonstration materials, please check the following folder included in the repository:

```text
/screenshots
```

The screenshots folder contains:
* WhatsApp chatbot interaction screenshots
* Demo video / screen recording of the flow

---

## License

MIT License

---

## Contributors

Developed for hackathon submission.

Backend Engineering Team
