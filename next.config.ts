import type { NextConfig } from 'next'
import withPayload from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  sassOptions: {
    loadPaths: ['./node_modules/@payloadcms/ui/dist/scss/'],
  },
  images: {
    // Patrones locales - Payload CMS usa /api/media/file/... para servir imágenes
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
      {
        pathname: '/logo-de-los-Castro.png',
      },
    ],
    // Calidad de las imágenes
    qualities: [100],
    // Patrones remotos - solo hostname string (sin arrays)
    remotePatterns: [
      // Para localhost
      {
        protocol: 'https',
        hostname: 'localhost',
      },
      // Para imágenes en Aiven/Payload cloud
      {
        protocol: 'https',
        hostname: 'pg-contruc-los-castros-vmontoya-dbe7.d.aivencloud.com',
      },
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  reactStrictMode: true,
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
