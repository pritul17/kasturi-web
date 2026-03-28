/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ← put this back
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
