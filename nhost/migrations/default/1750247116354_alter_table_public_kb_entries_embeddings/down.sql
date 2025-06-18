-- Drop the trigger
DROP TRIGGER IF EXISTS set_outdated ON "public"."kb_entries";

-- Drop the trigger function
DROP FUNCTION IF EXISTS set_outdated_trigger();

-- Remove the columns
ALTER TABLE "public"."kb_entries" DROP COLUMN IF EXISTS "embeddings_outdated";
ALTER TABLE "public"."kb_entries" DROP COLUMN IF EXISTS "embeddings";
