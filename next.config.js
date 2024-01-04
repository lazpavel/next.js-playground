/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.nasa.gov',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'lazpavel-test-image-optimization.s3.us-west-2.amazonaws.com',
        port: '',
      }
    ],
  },
}

module.exports = nextConfig
