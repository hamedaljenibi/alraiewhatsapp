import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),

  PORT: z
    .string()
    .default('4000')
    .transform(Number),

  MONGO_URI_DEV: z.string().min(1),

  MONGO_URI_PROD: z.string().min(1),

  JWT_SECRET: z.string().min(10),

  JWT_REFRESH_SECRET: z.string().min(10),

  CLIENT_URL: z.string().optional(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('Invalid environment variables');
  console.error(parsed.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = parsed.data;