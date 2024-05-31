/** @type {import('next').NextConfig} */
const nextConfig = {
  // cacheHandler: 
  // cacheMaxMemorySize: 0, // disable default in-memory caching
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

  async redirects() {
    return [
      {
        source: '/redirect-me',
        destination: '/redirected',
        permanent: true,
      },
      {
        source: '/redirect-posts/:id',
        destination: '/posts/:id',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
