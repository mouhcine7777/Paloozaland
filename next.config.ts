import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during builds
  },
  // output: "export", // Commenté pour le dev, réactiver pour le build statique
  images: {
    unoptimized: true, 
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;