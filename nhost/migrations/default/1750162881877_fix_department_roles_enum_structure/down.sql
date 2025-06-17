ALTER TABLE public.user_departments DROP CONSTRAINT IF EXISTS fk_user_departments_role;
DROP TABLE IF EXISTS public.department_roles CASCADE;
CREATE TABLE public.department_roles (
  role TEXT PRIMARY KEY,
  description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
INSERT INTO public.department_roles (role, description) VALUES
  ('member', 'Regular department member'),
  ('lead', 'Team lead or senior member'),
  ('manager', 'Department manager'),
  ('admin', 'Administrative role with full permissions'),
  ('coordinator', 'Project or task coordinator'),
  ('specialist', 'Subject matter expert or specialist');
