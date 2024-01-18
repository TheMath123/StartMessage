import { z } from 'zod';

const envSchema = z.object({
  API_LAYER_KEY: z.string({required_error: 'Varible is required'})
})

export const env = envSchema.parse(process.env)