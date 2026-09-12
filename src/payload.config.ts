import { postgresAdapter, sql } from '@payloadcms/db-postgres'
import sharp from 'sharp'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import Pages from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Proyectos } from './collections/Proyectos'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { plugins as defaultPlugins } from './plugins' // Renombrado para no sobrescribir el arreglo
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import dotenv from 'dotenv'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({ path: path.resolve(dirname, '../.env') })

// Captura cualquier variable de conexión a base de datos de Vercel o local
const connectionString =
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.DATABASE_URL ||
  ''

export default buildConfig({
  admin: {
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Móvil',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Escritorio',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
    meta: {
      titleSuffix: ' - Construcciones Los Castros',
    },
  },
  editor: defaultLexical,
  
  // 1. Configuración adaptada para Vercel Postgres / Neon
  db: postgresAdapter({
    pool: {
      connectionString,
      max: 10,
      ssl: process.env.POSTGRES_URL ? { rejectUnauthorized: false } : undefined,
    },
    afterSchemaInit: [
      async ({ adapter, schema }) => {
        try {
          if (adapter.drizzle) {
            await adapter.drizzle.execute(
              sql`ALTER TABLE "footer" ADD COLUMN IF NOT EXISTS "show_text_brand" boolean DEFAULT true;`
            )
          }
        } catch (e) {
          console.error('Error adding show_text_brand column', e)
        }
        return schema
      },
    ],
  }),

  collections: [Pages, Posts, Media, Categories, Users, Proyectos],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer],

  // 2. Conserva tus plugins existentes e integra vercelBlobStorage
  plugins: [
    ...(defaultPlugins || []),
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],

  // 3. Clave secreta fija
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        if (req.user) return true

        const secret = process.env.CRON_SECRET
        if (!secret) return false

        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${secret}`
      },
    },
    tasks: [],
  },
})