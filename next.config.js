/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: {webpack5: false} ,
  images: {
      domains: ['images.ctfassets.net'],
      disableStaticImages: true,
      minimumCacheTTL: 60,
  },
  experimental: {
      nextScriptWorkers: false,
      
  },
}

module.exports = nextConfig
