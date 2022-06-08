/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  swcMinify: true,
  images: {
    domains: ["cdn.discordapp.com", "https://cdn.discordapp.com"]
  }
}

module.exports = nextConfig
