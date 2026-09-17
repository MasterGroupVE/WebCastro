import pg from 'pg'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({ path: path.resolve(dirname, '../.env') })

const connectionString =
  process.env.DATABASE_URL_UNPOOLED ||
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.POSTGRES_URL ||
  ''

if (!connectionString) {
  console.log('[prebuild] No DB connection string found. Skipping dev migrations cleanup.')
  process.exit(0)
}

const pool = new pg.Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
})

try {
  const res = await pool.query(`DELETE FROM "payload_migrations" WHERE batch = -1`)
  if (res.rowCount > 0) {
    console.log(`[prebuild] Successfully cleaned up ${res.rowCount} dev migration entry(ies) with batch = -1.`)
  } else {
    console.log('[prebuild] No dev migration entries (batch = -1) found in DB.')
  }
} catch (err) {
  console.warn('[prebuild] Notice: Could not query payload_migrations table:', err.message)
} finally {
  await pool.end()
}
