import rateLimit from 'express-rate-limit';
import {
  RATE_LIMIT_MAX,
  RATE_LIMIT_WINDOW,
} from '../config/constants';

export const limiter = rateLimit({
  windowMs: RATE_LIMIT_WINDOW,

  max: RATE_LIMIT_MAX,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    success: false,
    message: 'Too many requests',
  },
});