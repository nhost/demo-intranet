alter table "public"."kb_entries" add column "embeddings" vector(1536)
 null;

alter table "public"."kb_entries" add column "embeddings_outdated" boolean
 not null default 'true';

-- Create a trigger that sets "outdated" to true if the columns
-- "title", "summary" or "content" are updated
CREATE OR REPLACE FUNCTION set_outdated_trigger()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.title <> OLD.title OR NEW.summary <> OLD.summary OR NEW.content <> OLD.content THEN
        NEW.embeddings_outdated := true;
    ELSEIF NEW.embeddings IS NOT NULL THEN
        NEW.embeddings_outdated := false;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Attach the trigger to the table
CREATE TRIGGER set_outdated
BEFORE UPDATE ON "kb_entries"
FOR EACH ROW
EXECUTE FUNCTION set_outdated_trigger();
