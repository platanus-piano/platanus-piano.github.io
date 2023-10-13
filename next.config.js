/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
    unoptimized: true,
  },
  output: 'export'
}

module.exports = nextConfig
