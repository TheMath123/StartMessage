import { z } from 'zod'

const envSchema = z.object({
  API_LAYER_KEY: z.string().min(3),
})

const serverEnv = {
  API_LAYER_KEY: process.env.API_LAYER_KEY,
};

export const env = envSchema.parse(serverEnv)