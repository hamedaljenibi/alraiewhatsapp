import cron from 'node-cron';

import { logger } from '../utils/logger';

export const initializeCronJobs = (): void => {

    // every 5 minutes

    // cron.schedule(
    //   '*/5 * * * *',
    //   async () => {
    //     await runTrackingPass()
    //   }
    // )


  cron.schedule(
    '*/5 * * * *',
    async () => {
      logger.info(
        'Cron running every 5 minutes',
      );
    },
  );
};