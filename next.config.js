/** @type {import('next').NextConfig} */
const nextConfig = {
  // cacheHandler: require.resolve('/Users/lazpavel/Amazon/github/amplify-hosting-cache/dist/shared-key-value-storage.js'),
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
