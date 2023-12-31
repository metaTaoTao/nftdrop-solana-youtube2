/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['arweave.net'],
  },
}

module.exports = nextConfig
