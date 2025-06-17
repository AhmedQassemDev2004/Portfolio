import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove experimental PPR which requires canary version
  devIndicators: {
    // Use the new position property instead of deprecated options
    position: 'bottom-right'
  },
  eslint: {
    ignoreDuringBuilds:true
  } 
};

export default nextConfig;
