const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Only ignore during builds for production deployment
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  typescript: {
    // Only ignore type errors during production builds
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
};

module.exports = withContentlayer(nextConfig);
