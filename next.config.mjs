/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ========================================
     PERFORMANCE OPTIMIZATIONS (P0 Priority)
     ======================================== */
  
  
  // ✅ Image Optimization Configuration
  images: {
    // Allow Next.js Image to optimize images from S3
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ayatiworks-storage.s3.us-east-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ayatiwork.b-cdn.net',
        pathname: '/**',
      },
    ],
    // Prefer modern formats (AVIF > WebP > original)
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Long-term cache for optimized images
    minimumCacheTTL: 31536000, // 1 year
  },

  // ✅ Cache Headers for Static Assets
  async headers() {
    return [
      // Long-term cache for static assets (images, fonts)
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Long-term cache for fonts
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache for JS/CSS (with revalidation)
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // HTML pages - short cache with stale-while-revalidate
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },

  // ✅ Production optimizations
  compress: true, // Enable gzip/brotli compression
  
  // ✅ Experimental optimizations
  experimental: {
    optimizePackageImports: ['lucide-react'], // Tree-shake icon library
    reactCompiler: false, // Turned off per user request
  },
};

export default nextConfig;
