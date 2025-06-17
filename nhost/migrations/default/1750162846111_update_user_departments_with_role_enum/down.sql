ALTER TABLE public.user_departments
DROP CONSTRAINT IF EXISTS fk_user_departments_role;
ALTER TABLE public.user_departments
ALTER COLUMN role DROP DEFAULT;
