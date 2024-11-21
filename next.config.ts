import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode : true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.minimize = true; 
    }
    return config;
  },
};

export default nextConfig;
