/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Habilita la exportación estática
  images: {
    unoptimized: true, // Necesario para exportación estática
  },
  // Aseguramos que las rutas en español funcionen correctamente
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
}

module.exports = nextConfig
