import { createServer } from 'http';

import app from './app';

import { env } from './config/env';

import { logger } from './utils/logger';
import { initializeMetrics } from './utils/metrics';
import { connectDB } from './database/mongo';
import { setupGracefulShutdown } from './utils/gracefulShutdown';
import { initializeCronJobs } from './jobs/scheduler';
import { initializeI18n } from './utils/i18n';

const bootstrap = async (): Promise<void> => {
  try {
    initializeMetrics();
    await connectDB();
    // initializeCronJobs();

    const server = createServer(
      app,
    );

    const i18nMiddleware =
  await initializeI18n();

app.use(i18nMiddleware);
    server.listen(
      env.PORT,
      () => {
        logger.info(
          `Server running on port ${env.PORT}`,
        );
      },
    );

    setupGracefulShutdown(
      server,
    );

    process.on(
      'uncaughtException',
      (error) => {
        logger.error(
          'Uncaught exception',
          { error },
        );

        process.exit(1);
      },
    );

    process.on(
      'unhandledRejection',
      (reason) => {
        logger.error(
          'Unhandled rejection',
          { reason },
        );

        process.exit(1);
      },
    );
  } catch (error) {
    logger.error(
      'Startup failed',
      { error },
    );

    process.exit(1);
  }
};

bootstrap();