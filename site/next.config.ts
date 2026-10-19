import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Spanish moved from /es to / in Oct 2026; keep old links working.
  async redirects() {
    return [{ source: '/es', destination: '/', permanent: true }];
  },
};

export default nextConfig;
