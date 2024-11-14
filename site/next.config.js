/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Public Kasm registry',
    description: 'Public registry for Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://hiristic.github.io/public_kasm_registry/ ',
    contactUrl: 'https://github.com/Hiristic/public_kasm_registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/public_kasm_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
