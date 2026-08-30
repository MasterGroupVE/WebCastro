import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // First, update ALL rows to have valid JSON (empty object if null/empty)
  await db.execute(sql`
    UPDATE "pages_blocks_column_columns" 
    SET "subheadline" = '{"content": ""}'::jsonb 
  `)
  // Make column nullable
  await db.execute(sql`
    ALTER TABLE "pages_blocks_column_columns" ALTER COLUMN "subheadline" DROP NOT NULL
  `)
  // Then alter the column type
  await db.execute(sql`
    ALTER TABLE "pages_blocks_column_columns" ALTER COLUMN "subheadline" TYPE jsonb USING subheadline::jsonb
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages_blocks_column_columns" ALTER COLUMN "subheadline" TYPE varchar USING subheadline::varchar
  `)
  await db.execute(sql`
    ALTER TABLE "pages_blocks_column_columns" ALTER COLUMN "subheadline" SET NOT NULL
  `)
}