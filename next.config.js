/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ✅ Enable image optimization for better performance
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400, // 24 hours cache for better performance
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1'
      },
      {
        protocol: 'https',
        hostname: 't47pestcontrol.com.au'
      },
      {
        protocol: 'https',
        hostname: 't47pestcontrol.com'
      },
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  swcMinify: true,
  reactStrictMode: true,
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Bundle optimization
  experimental: {
    serverComponentsExternalPackages: ['next/navigation'],
    optimizeCss: {
      inlineFonts: true,
    },
    scrollRestoration: true,
  },
  // Advanced code splitting optimization
  webpack: (config, { isServer, dev }) => {
    if (!isServer && !dev) {
      // Optimize bundle splitting for production
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
            maxSize: 244000,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: -5,
            enforce: true,
            maxSize: 244000,
          },
          // Separate React and Next.js into their own chunks
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
          // Separate large libraries
          libs: {
            test: /[\\/]node_modules[\\/]/,
            name: 'libs',
            chunks: 'all',
            priority: 10,
            minSize: 100000,
          },
        },
      };

      // Tree shaking optimization
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }
    return config;
  },
  // Compression and caching
  compress: true,
  poweredByHeader: false,
  generateEtags: true,


};

module.exports = nextConfig;