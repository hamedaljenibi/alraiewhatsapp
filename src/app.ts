import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

import indexRouter from './routes/index.route';

import { limiter } from './middleware/rateLimiter';
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/notFound.middleware';
import { metricsMiddleware } from './utils/metrics';
import { requestIdMiddleware } from './middleware/requestId.middleware';

const app = express();

app.set('trust proxy', 1);

app.use((req, res, next) => {
  res.setHeader('ngrok-skip-browser-warning', 'true');
  next();
});

app.use(
  requestIdMiddleware,
);

app.use(
  helmet(),
);

app.use(
  cors(),
);

app.use(
  compression(),
);

/*
important

webhook raw parser goes here later

app.post(
 '/webhooks/stripe',
 express.raw({ type:'application/json' }),
 handler
)

*/
app.use(express.urlencoded({ extended: true }));

app.use(
  express.json({
    limit: '10mb',
  }),
);

app.use(
  limiter,
);

app.use(
  metricsMiddleware,
);

app.get('/', (_req, res) => {
  res.json({
    success: true,
    message: 'API running',
  });
});

app.use(
  '/',
  indexRouter,
);

app.use(
  notFoundHandler,
);

app.use(
  errorHandler,
);

export default app;