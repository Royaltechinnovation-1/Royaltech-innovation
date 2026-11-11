import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hostinger Node.js hosting also injects standalone; setting it here
  // keeps local production builds aligned with deploy.
  output: "standalone",
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
