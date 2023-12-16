/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_LAYER_KEY: process.env.API_LAYER_KEY,
  },
};

module.exports = nextConfig;
