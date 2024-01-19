import { z } from 'zod'

const envSchema = z.object({
  API_LAYER_KEY: z.string(),
  API_IPINFO_TOKEN: z.string().min(14),
})

const serverEnv = {
  API_LAYER_KEY: process.env.API_LAYER_KEY,
  API_IPINFO_TOKEN: process.env.API_IPINFO_TOKEN,
};

export const env = envSchema.parse(serverEnv)