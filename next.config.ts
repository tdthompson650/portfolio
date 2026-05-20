import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    // Tree-shake react-icons so only imported icons are bundled.
    optimizePackageImports: ['react-icons'],
  },
};

export default nextConfig;
