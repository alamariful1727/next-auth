import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.alertready.ca',
      },
    ],
  },
};

export default nextConfig;
