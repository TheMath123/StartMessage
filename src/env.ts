import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    API_IPINFO_TOKEN: z
      .string()
      .min(
        14,
        "API_IPINFO_TOKEN is required and must be at least 14 characters long",
      ),
    UMAMI_TOKEN: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    API_IPINFO_TOKEN: process.env.API_IPINFO_TOKEN,
    UMAMI_TOKEN: process.env.UMAMI_TOKEN,
  },
});
// Environment variables
export const isProduction =
  process.env.VERCEL_ENV === "production" ||
  process.env.NODE_ENV === "production";
export const isDevelopment = process.env.NODE_ENV === "development";
