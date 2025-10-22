/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_LAYER_KEY: process.env.API_LAYER_KEY,
    API_IPINFO_TOKEN: process.env.API_IPINFO_TOKEN,
  },
};

module.exports = nextConfig;
