let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable image optimization for better performance
    unoptimized: false,
    // Add common image domains if needed
    domains: [],
    // Configure image formats
    formats: ['image/avif', 'image/webp'],
    // Set reasonable image cache duration
    minimumCacheTTL: 60,
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Improve production performance
  productionBrowserSourceMaps: false,
  // Optimize bundle size
  swcMinify: true,
  // Improve page loading performance with prefetching
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  experimental: {
    // Keep the stable features, remove potentially problematic ones
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    // Disable optimizeCss for now as it's causing deployment issues
    // optimizeCss: true,
    // Improve code splitting
    optimizePackageImports: ['react-dom', 'react', 'date-fns'],
  },
  // Configure webpack for better performance
  webpack: (config, { dev, isServer }) => {
    // Add optimizations only for production builds
    if (!dev) {
      config.optimization.minimize = true;
    }
    return config;
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
