const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  images: {
    unoptimized: true, // Disable image optimization for static export
    domains: [], // Add any external image domains if needed
  },
  // Note: experimental.mdxRs is not recommended for App Router, use the standard setup above
  experimental: {
    outputFileTracingIncludes: {
      '/app/api/newsletter/route': ['./templates/*.html'],
      '/app/api/inquiries/route': ['./templates/*.html'],
    },
  },
}

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig) 