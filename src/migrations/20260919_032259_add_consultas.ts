import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  DO $$ BEGIN
    CREATE TYPE "public"."enum_consultas_estado" AS ENUM('pendiente', 'contactado', 'cotizado', 'ganado', 'descartado');
  EXCEPTION WHEN duplicate_object THEN null;
  END $$;

  CREATE TABLE IF NOT EXISTS "consultas" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"nombre" varchar NOT NULL,
  	"telefono" varchar NOT NULL,
  	"servicio" varchar NOT NULL,
  	"detalles" varchar,
  	"estado" "enum_consultas_estado" DEFAULT 'pendiente' NOT NULL,
  	"origen" varchar DEFAULT 'Modal Asesoría Web',
  	"notas_admin" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "consultas_id" integer;
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "consultas_updated_at_idx" ON "consultas" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "consultas_created_at_idx" ON "consultas" USING btree ("created_at");

  DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_consultas_fk" FOREIGN KEY ("consultas_id") REFERENCES "public"."consultas"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_consultas_id_idx" ON "payload_locked_documents_rels" USING btree ("consultas_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "consultas" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "consultas" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_consultas_fk";
  
  DROP INDEX "payload_locked_documents_rels_consultas_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "consultas_id";
  DROP TYPE "public"."enum_consultas_estado";`)
}
