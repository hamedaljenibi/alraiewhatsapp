import client from 'prom-client';
import { Request, Response, NextFunction } from 'express';

let initialized = false;

export const initializeMetrics = (): void => {
  if (initialized) return;

  client.collectDefaultMetrics();

  initialized = true;
};

export const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_ms',

  help: 'Duration of HTTP requests in ms',

  labelNames: ['method', 'route', 'status_code'],

  buckets: [
    50,
    100,
    200,
    300,
    500,
    1000,
    2000,
  ],
});

export const metricsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const end = httpRequestDuration.startTimer();

  res.on('finish', () => {
    end({
      method: req.method,
      route: req.route?.path || req.path,
      status_code: String(res.statusCode),
    });
  });

  next();
};

export const metricsEndpoint = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  res.set('Content-Type', client.register.contentType);

  res.end(await client.register.metrics());
};