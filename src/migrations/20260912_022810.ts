import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_cta_button_action" AS ENUM('modal', 'link');
  CREATE TYPE "public"."enum_pages_blocks_cta_background_color" AS ENUM('yellow', 'navy', 'green');
  CREATE TYPE "public"."enum_pages_blocks_org_chart_operational_nodes_color" AS ENUM('teal', 'amber', 'blue', 'emerald');
  CREATE TYPE "public"."enum_proyectos_categoria" AS ENUM('vialidad', 'petroleo', 'pilotaje', 'patrimonial', 'ambiental');
  ALTER TYPE "public"."enum_pages_blocks_column_columns_block_type" ADD VALUE 'proyecto' BEFORE 'hero';
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"headline" varchar NOT NULL,
  	"subheadline" varchar,
  	"button_text" varchar DEFAULT 'Más información' NOT NULL,
  	"button_action" "enum_pages_blocks_cta_button_action" DEFAULT 'modal' NOT NULL,
  	"button_link" varchar,
  	"background_color" "enum_pages_blocks_cta_background_color" DEFAULT 'yellow',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_portfolio_grid_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_portfolio_grid_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"category" varchar NOT NULL,
  	"location" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"badge_text" varchar,
  	"status" varchar DEFAULT 'Proyecto Concluido',
  	"detail_title" varchar,
  	"detail_description" varchar
  );
  
  CREATE TABLE "pages_blocks_portfolio_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge" varchar DEFAULT 'Portafolio de Obras',
  	"headline" varchar DEFAULT 'Proyectos de Envergadura Realizados' NOT NULL,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_mission_vision" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge" varchar DEFAULT 'Nuestra Filosofía',
  	"headline" varchar NOT NULL,
  	"subheadline" varchar,
  	"vision_label" varchar,
  	"vision_title" varchar NOT NULL,
  	"vision_text" varchar NOT NULL,
  	"vision_footer_left" varchar,
  	"vision_footer_right" varchar,
  	"mision_label" varchar,
  	"mision_title" varchar NOT NULL,
  	"mision_text" varchar NOT NULL,
  	"mision_footer_left" varchar,
  	"mision_footer_right" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_org_chart_admin_nodes" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"title" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_org_chart_operational_nodes" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"color" "enum_pages_blocks_org_chart_operational_nodes_color" DEFAULT 'teal'
  );
  
  CREATE TABLE "pages_blocks_org_chart" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge" varchar DEFAULT 'Organización Interna',
  	"headline" varchar NOT NULL,
  	"subheadline" varchar,
  	"top_node_label" varchar DEFAULT 'DIRECCIÓN GENERAL',
  	"top_node_title" varchar NOT NULL,
  	"top_node_subtitle" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_client_logos_clients" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"description" varchar,
  	"icon" varchar,
  	"logo_id" integer
  );
  
  CREATE TABLE "pages_blocks_client_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge" varchar DEFAULT 'Respaldo Institucional',
  	"headline" varchar NOT NULL,
  	"subheadline" varchar,
  	"additional_clients_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_legal_info_checklist" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_legal_info_legal_fields" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"highlight" boolean DEFAULT false,
  	"subtext" varchar
  );
  
  CREATE TABLE "pages_blocks_legal_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge" varchar DEFAULT 'Información Jurídica',
  	"headline" varchar NOT NULL,
  	"description" varchar,
  	"address_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "proyectos" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"titulo" varchar NOT NULL,
  	"categoria" "enum_proyectos_categoria" NOT NULL,
  	"imagen_id" integer NOT NULL,
  	"descripcion" varchar,
  	"tecnologia" varchar,
  	"cliente" varchar,
  	"ano" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "pages_blocks_testimonials_testimonials" DROP CONSTRAINT "pages_blocks_testimonials_testimonials_avatar_id_media_id_fk";
  
  DROP INDEX "pages_blocks_testimonials_testimonials_avatar_idx";
  ALTER TABLE "pages_blocks_column_columns" ALTER COLUMN "subheadline" SET DATA TYPE varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "proyectos_id" integer;
  ALTER TABLE "footer" ADD COLUMN "show_text_brand" boolean DEFAULT true;
  ALTER TABLE "footer" ADD COLUMN "social_links_show_text" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio_grid_categories" ADD CONSTRAINT "pages_blocks_portfolio_grid_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_portfolio_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio_grid_projects" ADD CONSTRAINT "pages_blocks_portfolio_grid_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio_grid_projects" ADD CONSTRAINT "pages_blocks_portfolio_grid_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_portfolio_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio_grid" ADD CONSTRAINT "pages_blocks_portfolio_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_mission_vision" ADD CONSTRAINT "pages_blocks_mission_vision_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_org_chart_admin_nodes" ADD CONSTRAINT "pages_blocks_org_chart_admin_nodes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_org_chart"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_org_chart_operational_nodes" ADD CONSTRAINT "pages_blocks_org_chart_operational_nodes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_org_chart"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_org_chart" ADD CONSTRAINT "pages_blocks_org_chart_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_client_logos_clients" ADD CONSTRAINT "pages_blocks_client_logos_clients_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_client_logos_clients" ADD CONSTRAINT "pages_blocks_client_logos_clients_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_client_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_client_logos" ADD CONSTRAINT "pages_blocks_client_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_legal_info_checklist" ADD CONSTRAINT "pages_blocks_legal_info_checklist_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_legal_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_legal_info_legal_fields" ADD CONSTRAINT "pages_blocks_legal_info_legal_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_legal_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_legal_info" ADD CONSTRAINT "pages_blocks_legal_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proyectos" ADD CONSTRAINT "proyectos_imagen_id_media_id_fk" FOREIGN KEY ("imagen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_portfolio_grid_categories_order_idx" ON "pages_blocks_portfolio_grid_categories" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio_grid_categories_parent_id_idx" ON "pages_blocks_portfolio_grid_categories" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio_grid_projects_order_idx" ON "pages_blocks_portfolio_grid_projects" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio_grid_projects_parent_id_idx" ON "pages_blocks_portfolio_grid_projects" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio_grid_projects_image_idx" ON "pages_blocks_portfolio_grid_projects" USING btree ("image_id");
  CREATE INDEX "pages_blocks_portfolio_grid_order_idx" ON "pages_blocks_portfolio_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio_grid_parent_id_idx" ON "pages_blocks_portfolio_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio_grid_path_idx" ON "pages_blocks_portfolio_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_mission_vision_order_idx" ON "pages_blocks_mission_vision" USING btree ("_order");
  CREATE INDEX "pages_blocks_mission_vision_parent_id_idx" ON "pages_blocks_mission_vision" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_mission_vision_path_idx" ON "pages_blocks_mission_vision" USING btree ("_path");
  CREATE INDEX "pages_blocks_org_chart_admin_nodes_order_idx" ON "pages_blocks_org_chart_admin_nodes" USING btree ("_order");
  CREATE INDEX "pages_blocks_org_chart_admin_nodes_parent_id_idx" ON "pages_blocks_org_chart_admin_nodes" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_org_chart_operational_nodes_order_idx" ON "pages_blocks_org_chart_operational_nodes" USING btree ("_order");
  CREATE INDEX "pages_blocks_org_chart_operational_nodes_parent_id_idx" ON "pages_blocks_org_chart_operational_nodes" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_org_chart_order_idx" ON "pages_blocks_org_chart" USING btree ("_order");
  CREATE INDEX "pages_blocks_org_chart_parent_id_idx" ON "pages_blocks_org_chart" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_org_chart_path_idx" ON "pages_blocks_org_chart" USING btree ("_path");
  CREATE INDEX "pages_blocks_client_logos_clients_order_idx" ON "pages_blocks_client_logos_clients" USING btree ("_order");
  CREATE INDEX "pages_blocks_client_logos_clients_parent_id_idx" ON "pages_blocks_client_logos_clients" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_client_logos_clients_logo_idx" ON "pages_blocks_client_logos_clients" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_client_logos_order_idx" ON "pages_blocks_client_logos" USING btree ("_order");
  CREATE INDEX "pages_blocks_client_logos_parent_id_idx" ON "pages_blocks_client_logos" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_client_logos_path_idx" ON "pages_blocks_client_logos" USING btree ("_path");
  CREATE INDEX "pages_blocks_legal_info_checklist_order_idx" ON "pages_blocks_legal_info_checklist" USING btree ("_order");
  CREATE INDEX "pages_blocks_legal_info_checklist_parent_id_idx" ON "pages_blocks_legal_info_checklist" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_legal_info_legal_fields_order_idx" ON "pages_blocks_legal_info_legal_fields" USING btree ("_order");
  CREATE INDEX "pages_blocks_legal_info_legal_fields_parent_id_idx" ON "pages_blocks_legal_info_legal_fields" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_legal_info_order_idx" ON "pages_blocks_legal_info" USING btree ("_order");
  CREATE INDEX "pages_blocks_legal_info_parent_id_idx" ON "pages_blocks_legal_info" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_legal_info_path_idx" ON "pages_blocks_legal_info" USING btree ("_path");
  CREATE INDEX "proyectos_imagen_idx" ON "proyectos" USING btree ("imagen_id");
  CREATE INDEX "proyectos_updated_at_idx" ON "proyectos" USING btree ("updated_at");
  CREATE INDEX "proyectos_created_at_idx" ON "proyectos" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_proyectos_fk" FOREIGN KEY ("proyectos_id") REFERENCES "public"."proyectos"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_proyectos_id_idx" ON "payload_locked_documents_rels" USING btree ("proyectos_id");
  ALTER TABLE "pages_blocks_testimonials_testimonials" DROP COLUMN "avatar_id";
  ALTER TABLE "pages_blocks_testimonials" DROP COLUMN "badge";
  ALTER TABLE "pages_blocks_testimonials" DROP COLUMN "headline";
  ALTER TABLE "pages_blocks_testimonials" DROP COLUMN "subheadline";
  ALTER TABLE "pages_blocks_faq" DROP COLUMN "badge";
  ALTER TABLE "pages_blocks_faq" DROP COLUMN "headline";
  ALTER TABLE "pages_blocks_faq" DROP COLUMN "subheadline";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_portfolio_grid_categories" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_portfolio_grid_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_portfolio_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_mission_vision" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_org_chart_admin_nodes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_org_chart_operational_nodes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_org_chart" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_client_logos_clients" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_client_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_legal_info_checklist" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_legal_info_legal_fields" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_legal_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proyectos" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_portfolio_grid_categories" CASCADE;
  DROP TABLE "pages_blocks_portfolio_grid_projects" CASCADE;
  DROP TABLE "pages_blocks_portfolio_grid" CASCADE;
  DROP TABLE "pages_blocks_mission_vision" CASCADE;
  DROP TABLE "pages_blocks_org_chart_admin_nodes" CASCADE;
  DROP TABLE "pages_blocks_org_chart_operational_nodes" CASCADE;
  DROP TABLE "pages_blocks_org_chart" CASCADE;
  DROP TABLE "pages_blocks_client_logos_clients" CASCADE;
  DROP TABLE "pages_blocks_client_logos" CASCADE;
  DROP TABLE "pages_blocks_legal_info_checklist" CASCADE;
  DROP TABLE "pages_blocks_legal_info_legal_fields" CASCADE;
  DROP TABLE "pages_blocks_legal_info" CASCADE;
  DROP TABLE "proyectos" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_proyectos_fk";
  
  ALTER TABLE "pages_blocks_column_columns" ALTER COLUMN "block_type" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_column_columns_block_type";
  CREATE TYPE "public"."enum_pages_blocks_column_columns_block_type" AS ENUM('hero', 'aboutUs', 'services', 'process', 'projects', 'testimonials', 'faq', 'ctaBanner', 'features', 'postsGrid', 'slider');
  ALTER TABLE "pages_blocks_column_columns" ALTER COLUMN "block_type" SET DATA TYPE "public"."enum_pages_blocks_column_columns_block_type" USING "block_type"::"public"."enum_pages_blocks_column_columns_block_type";
  DROP INDEX "payload_locked_documents_rels_proyectos_id_idx";
  ALTER TABLE "pages_blocks_column_columns" ALTER COLUMN "subheadline" SET DATA TYPE jsonb;
  ALTER TABLE "pages_blocks_testimonials_testimonials" ADD COLUMN "avatar_id" integer;
  ALTER TABLE "pages_blocks_testimonials" ADD COLUMN "badge" varchar DEFAULT 'Opiniones Reales';
  ALTER TABLE "pages_blocks_testimonials" ADD COLUMN "headline" varchar DEFAULT 'Respaldados por Nuestros Clientes' NOT NULL;
  ALTER TABLE "pages_blocks_testimonials" ADD COLUMN "subheadline" varchar;
  ALTER TABLE "pages_blocks_faq" ADD COLUMN "badge" varchar DEFAULT 'Preguntas Frecuentes';
  ALTER TABLE "pages_blocks_faq" ADD COLUMN "headline" varchar DEFAULT 'Lo Que Debes Saber Antes de Iniciar' NOT NULL;
  ALTER TABLE "pages_blocks_faq" ADD COLUMN "subheadline" varchar;
  ALTER TABLE "pages_blocks_testimonials_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_testimonials_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_testimonials_testimonials_avatar_idx" ON "pages_blocks_testimonials_testimonials" USING btree ("avatar_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "proyectos_id";
  ALTER TABLE "footer" DROP COLUMN "show_text_brand";
  ALTER TABLE "footer" DROP COLUMN "social_links_show_text";
  DROP TYPE "public"."enum_pages_blocks_cta_button_action";
  DROP TYPE "public"."enum_pages_blocks_cta_background_color";
  DROP TYPE "public"."enum_pages_blocks_org_chart_operational_nodes_color";
  DROP TYPE "public"."enum_proyectos_categoria";`)
}
