import { z } from "zod";

const envSchema = z.object({
  API_IPINFO_TOKEN: z.string().min(14),
  UMAMI_TOKEN: z.string().min(1),
});

const serverEnv = {
  API_IPINFO_TOKEN: process.env.API_IPINFO_TOKEN,
  UMAMI_TOKEN: process.env.UMAMI_TOKEN,
};

export const env = envSchema.parse(serverEnv);
