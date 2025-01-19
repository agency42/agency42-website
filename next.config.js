/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable image optimization for static export
    domains: [], // Add any external image domains if needed
  },
}

module.exports = nextConfig 