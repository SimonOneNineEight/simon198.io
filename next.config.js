/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Only ignore during builds for production deployment
    ignoreDuringBuilds: process.env.NODE_ENV === "production",
  },
  typescript: {
    // Only ignore type errors during production builds
    ignoreBuildErrors: process.env.NODE_ENV === "production",
  },
};

const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;

if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  const { build } = require("velite");
  build({ watch: isDev, clean: !isDev });
}

module.exports = nextConfig;
