ALTER TABLE public.user_departments
ADD CONSTRAINT fk_user_departments_role
FOREIGN KEY (role) REFERENCES public.department_roles(role)
ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE public.user_departments
ALTER COLUMN role SET DEFAULT 'member';
UPDATE public.user_departments SET role = 'member' WHERE role IS NULL;
