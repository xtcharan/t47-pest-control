/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost', '127.0.0.1', 't47pestcontrol.com'],
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  swcMinify: true,
  reactStrictMode: true,
  // Exclude search page from static generation
  experimental: {
    serverComponentsExternalPackages: ['next/navigation']
  }
};

module.exports = nextConfig;