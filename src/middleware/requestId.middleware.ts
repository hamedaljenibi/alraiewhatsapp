import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

export const requestIdMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  req.requestId = crypto.randomUUID();

  next();
};