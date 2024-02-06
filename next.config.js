/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheHandler: require.resolve('/home/development/github/lazpavel/key-value-storage/dist/key-value-storage.js'),
  cacheMaxMemorySize: 0, // disable default in-memory caching
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '*.amplifyapp.com',
        port: '',
      }
    ],
  },
}

module.exports = nextConfig
