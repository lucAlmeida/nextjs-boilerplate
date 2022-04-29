/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = nextConfig
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
