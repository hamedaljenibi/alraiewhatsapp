import { Server } from 'http';
import { logger } from './logger';
import { disconnectDB } from '../database/mongo';

export const setupGracefulShutdown = (
  server: Server,
): void => {
  const shutdown = async (
    signal: string,
  ): Promise<void> => {
    logger.info(`Received ${signal}`);

    try {
      await disconnectDB();

      logger.info('Mongo disconnected');

      server.close((error) => {
        if (error) {
          logger.error('Shutdown error', {
            error,
          });

          process.exit(1);
        }

        logger.info('Server closed');

        process.exit(0);
      });

      setTimeout(() => {
        logger.error('Forced shutdown');

        process.exit(1);
      }, 30000).unref();
    } catch (error) {
      logger.error('Graceful shutdown failed', {
        error,
      });

      process.exit(1);
    }
  };

  process.on('SIGINT', () => shutdown('SIGINT'));

  process.on('SIGTERM', () => shutdown('SIGTERM'));
};