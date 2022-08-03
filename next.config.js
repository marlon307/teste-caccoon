/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'dummyjson.com'],
    deviceSizes: [280, 350, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [256, 384, 1080, 1920],
  },
  env: {
    LOCAL_API_HOST: process.env.LOCAL_API_HOST,
  },
};

module.exports = nextConfig;
