/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.worldvectorlogo.com',
      'upload.wikimedia.org',
      'seeklogo.com',
      'cdn.jsdelivr.net',
      'www.svgrepo.com',
      'via.placeholder.com'
    ],
    unoptimized: true, // For SVG images from external domains
  },
  // Optimize bundle size
  swcMinify: true,
  // Reduce the size of the JavaScript bundles
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
