/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'dummyjson.com', 'robohash.org'],
    deviceSizes: [280, 350, 1080, 1920],
    imageSizes: [280, 350, 1080, 1920],
  },
  env: {
    LOCAL_API_HOST: process.env.LOCAL_API_HOST,
  },
};

module.exports = nextConfig;
