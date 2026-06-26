import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  logger.error('Request failed', {
    requestId: req.requestId,
    error,
  });

  if (error.code === 11000) {
    res.status(400).json({
      success: false,
      message: 'Duplicate value exists',
    });

    return;
  }

  if (error.name === 'ValidationError') {
    res.status(400).json({
      success: false,
      message: error.message,
    });

    return;
  }

  if (error.name === 'CastError') {
    res.status(400).json({
      success: false,
      message: 'Invalid ID',
    });

    return;
  }

  const status = error.status || 500;

  res.status(status).json({
    success: false,
    message: error.message || 'Internal server error',
  });
};