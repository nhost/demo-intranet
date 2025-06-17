DELETE FROM public.departments
WHERE
    id IN (
        '2db9de0a-b9ba-416e-8619-783a399ae2b3', -- Human Resources
        '023d4410-715e-4675-96a5-a58fd50ef33c', -- Engineering
        'dcd52518-58d0-4834-9683-ba6dee33833f', -- Marketing
        'ffd095c2-9745-43d9-b133-7e8d847e8371', -- Sales
        '24e9b8db-acf8-439f-9d63-7f83de523fb3', -- Finance
        'fd1e6bba-c292-4b2f-872e-ae16146cdd82' -- Operations
    );
