/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'main.dinkaygu8ph50.amplifyapp.com',
        port: '',
      }
    ],
  },
}

module.exports = nextConfig
