/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: {webpack5: true} ,
  images: {
      domains: ['images.ctfassets.net'],
      disableStaticImages: true,
      minimumCacheTTL: 60,
  },
  experimental: {
      nextScriptWorkers: true,
  },
}

module.exports = nextConfig
