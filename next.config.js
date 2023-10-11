/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.amplifyapp.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
