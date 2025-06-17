ALTER TABLE public.user_departments DROP CONSTRAINT IF EXISTS fk_user_departments_role;
DROP TABLE IF EXISTS public.department_roles CASCADE;
CREATE TABLE public.department_roles (
  value TEXT PRIMARY KEY,
  comment TEXT
);
INSERT INTO public.department_roles (value, comment) VALUES
  ('member', 'Regular department member'),
  ('manager', 'Department manager');
ALTER TABLE public.user_departments
ADD CONSTRAINT fk_user_departments_role
FOREIGN KEY (role) REFERENCES public.department_roles(value)
ON DELETE RESTRICT ON UPDATE CASCADE;
