/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Deshabilitar ESLint durante el build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Deshabilitar verificación de tipos durante el build
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
