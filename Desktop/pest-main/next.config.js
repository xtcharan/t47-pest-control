/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    domains: [],
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

  // Add trailing slashes to URLs
  trailingSlash: true,

  // Configure webpack to handle static assets
  webpack: (config) => {
    // Add a rule to handle static assets
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/media/',
            outputPath: 'static/media/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  }
};

module.exports = nextConfig;