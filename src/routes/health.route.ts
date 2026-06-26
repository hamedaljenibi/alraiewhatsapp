import { Router } from 'express';

const router = Router();

router.get(
  '/health',
  (_req, res) => {
    res.status(200).json({
      success: true,
      status: 'healthy',
    });
  },
);

router.get(
  '/ready',
  (_req, res) => {
    res.status(200).json({
      success: true,
      status: 'ready',
    });
  },
);

export default router;