import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "happyho.in",
      },
      {
        protocol: "https",
        hostname: "www.happyho.in",
      },
    ],
  },
};

export default nextConfig;
