import mongoose from 'mongoose';
import { env } from '../config/env';
import { logger } from '../utils/logger';

let isConnected = false;

export const connectDB = async (): Promise<void> => {
  if (isConnected) {
    logger.info('MongoDB already connected');
    return;
  }

  const mongoUri =
    env.NODE_ENV === 'production'
      ? env.MONGO_URI_PROD
      : env.MONGO_URI_DEV;

  try {
    mongoose.set('strictQuery', true);

    await mongoose.connect(mongoUri, {
      autoIndex: true,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
    });

    isConnected = true;

    logger.info('MongoDB connected successfully');

    registerMongoEvents();
  } catch (error) {
    logger.error('Mongo connection failed', {
      error,
    });

    throw error;
  }
};

const registerMongoEvents = () => {
  mongoose.connection.on('error', (error) => {
    logger.error('MongoDB error', {
      error,
    });
  });

  mongoose.connection.on('disconnected', () => {
    logger.warn('MongoDB disconnected');
    isConnected = false;
  });

  mongoose.connection.on('reconnected', () => {
    logger.info('MongoDB reconnected');
    isConnected = true;
  });
};

export const disconnectDB = async (): Promise<void> => {
  await mongoose.connection.close();
  isConnected = false;
};