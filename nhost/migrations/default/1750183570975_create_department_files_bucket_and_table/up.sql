INSERT INTO storage.buckets (id, download_expiration, min_upload_file_size, max_upload_file_size, cache_control, presigned_urls_enabled) VALUES ('department_files', 30, 1, 50000000, 'max-age=3600', true);
CREATE TABLE department_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  file_id UUID NOT NULL REFERENCES storage.files(id) ON DELETE CASCADE,
  department_id UUID NOT NULL REFERENCES departments(id) ON DELETE CASCADE,
  description TEXT
);
