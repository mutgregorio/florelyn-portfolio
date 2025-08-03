/** @type {import('next').NextConfig} */

const repo = 'modern-portfolio' // Replace with your repository name
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? assetPrefix : undefined,
  basePath: process.env.NODE_ENV === 'production' ? basePath : undefined,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig


