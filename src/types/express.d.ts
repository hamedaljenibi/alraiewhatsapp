import 'express';

declare global {
  namespace Express {
    interface Request {
      requestId?: string;

      user?: {
        id: string;
        email?: string;
        role?: string;
      };

      language?: string;

      subscription?: any;
    }
  }
}

export {};