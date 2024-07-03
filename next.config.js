/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/base',
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
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
        source: '/old-path/(.*)',
        destination: '/new-path/$1',
        permanent: true,
      },
      {
        source: '/post/:slug(\\d{1,})',
        destination: '/posts/:slug',
        permanent: true,
      },
      {
        source: "/old-blog/:first(\\d{1,})/should-be-here/:second*",
        destination: "/new-blog/:first/should-be-here/:second*",
        permanent: false,
      },
      {
        locale: false,
        source: '/old-blog/:first*/should-be-here/:second*',
        destination: '/new-blog/:first*/should-be-here/:second*',
        permanent: false,
      },
      {
        basePath: false,
        locale: false,
        source: '/redirect-me',
        destination: '/redirected',
        permanent: true,
      },
      {
        basePath: false,
        source: '/redirect-posts/:id',
        destination: '/posts/:id',
        permanent: true,
      },
      {
        permanent: true,
        source: '/full-redirect-rule/:path*',
        destination: '/:method/:path*',
        has: [
          {
            type: 'query',
            key: 'method',
            value: '(?<method>create|update)',
          },
        ],
        missing: [
          {
            type: 'host',
            value: 'not-amplifyapp.com',
          },
          {
            type: 'header',
            key: 'x-amplify-optimized',
            value: ':no-cache(no-cache)',
          }
        ],
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/full-rewrite-rule/:path*',
        headers: [
          {
            key: 'x-custom-header',
            value: 'custom value',
          },
          {
            key: 'x-amplify-processed',
            value: 'true',
          }
        ],
        has: [
          {
            type: 'query',
            key: 'method',
            value: '(?<method>create|update)',
          },
        ],
        missing: [
          {
            type: 'host',
            value: 'not-amplifyapp.com',
          },
          {
            type: 'header',
            key: 'x-amplify-optimized',
            value: ':no-cache(no-cache)',
          }
        ],
      },
    ]
  },

  async rewrites() {
    return [
      {
        source: '/full-rewrite-rule/:path*',
        destination: '/:method/:path*',
        has: [
          {
            type: 'query',
            key: 'method',
            value: '(?<method>create|update)',
          },
        ],
        missing: [
          {
            type: 'host',
            value: 'not-amplifyapp.com',
          },
          {
            type: 'header',
            key: 'x-amplify-optimized',
            value: ':no-cache(no-cache)',
          }
        ],
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/header-rule',
        headers: [
          {
            key: 'x-amplify-optimized',
            value: 'true',
          },
          {
            key: 'via',
            value: 'something',
          }
        ],
      },
    ]
  }
}

module.exports = nextConfig
