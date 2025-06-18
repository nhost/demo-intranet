INSERT INTO graphite.assistants VALUES ('af364b65-e3d3-4071-b1e9-1467c4969978', '2025-06-18 12:32:12.556662+00', '2025-06-18 12:35:56.36702+00', 'asst_op4k5V5fSsmRdqXXvKYeYSAE', NULL, '"{\"assistantID\":\"asst_op4k5V5fSsmRdqXXvKYeYSAE\",\"name\":\"intranet-assistant\",\"description\":\"Intranet Assistant\",\"instructions\":\"You are a helpful assistant for Acme Corp.''s intranet. You have access to the knowledge base and files uploaded by the various departments. Provide useful information making sure to answer based on available data in the intranet.\",\"model\":\"gpt-4.1-2025-04-14\",\"graphql\":[{\"name\":\"search_kb\",\"description\":\"Use this to search the intranet''s knowledge base.\",\"query\":\"query SearchKBEntries($query: String!) {\\n\\tgraphiteSearchKbEntries(\\n    args: {\\n      query: $query,\\n      amount: 5,\\n      maxdistance: 0.5,\\n    }\\n  ) {\\n    title\\n    summary\\n    content\\n  }\\n}\",\"arguments\":[{\"name\":\"query\",\"description\":\"This is the query to search. Under the hood this is a query leveraging embeddings and pgvector\",\"type\":\"string\",\"required\":true}]}],\"fileStores\":[\"38ef4274-f455-4472-9c02-dd625dd9b641\"]}"');


INSERT INTO graphite.file_stores VALUES ('38ef4274-f455-4472-9c02-dd625dd9b641', '2025-06-18 12:35:46.758778+00', '2025-06-18 12:36:01.769487+00', '2025-06-18 12:36:01.767831+00', 'files', 'vs_6852b2a307f88191a69a4cfaeafb6008', NULL);


INSERT INTO graphite.assistant_file_stores VALUES ('2025-06-18 12:35:56.382248+00', '2025-06-18 12:35:56.382248+00', 'asst_op4k5V5fSsmRdqXXvKYeYSAE', '38ef4274-f455-4472-9c02-dd625dd9b641');


INSERT INTO graphite.auto_embeddings_configuration VALUES ('c7850e66-d275-4ae0-a5c5-4573a6c325f1', '2025-06-18 12:28:43.029236+00', '2025-06-18 12:28:43.029236+00', 'kb_entries', 'public', 'kb_entries', 'embeddings', NULL, 'query GetOutdatedKBEntries {
  kb_entries(where: {
    _or: [
      {embeddings: {_is_null: true}},
      {embeddings_outdated: {_eq: true},
    },
  ]}) {
    id
    title
    summary
    content
  }
}', 'mutation UpdateEmbeddingsKBEntry($id: uuid!, $embeddings: vector) {
  update_kb_entries_by_pk(pk_columns: {id: $id}, _set: {embeddings: $embeddings}) {
    __typename
  }
}', 'text-embedding-ada-002');

INSERT INTO graphite.file_store_buckets VALUES ('2025-06-18 12:35:47.220824+00', '2025-06-18 12:35:47.220824+00', 'default', '38ef4274-f455-4472-9c02-dd625dd9b641');

INSERT INTO graphite.files VALUES ('a63578a3-9e29-41b3-8711-6e03b5677a7d', '2025-06-18 12:35:48.349493+00', '2025-06-18 12:35:48.349493+00', 'file-MsqJWkrezC1cibxfts87TQ', 'afcb85c6-89a2-4982-a0d0-585672afdce8', '"86e249b8643a0ceaa80746f0f44045c6"');
INSERT INTO graphite.files VALUES ('f4b75947-b5a8-4a2c-b623-e97a9c8254b6', '2025-06-18 12:35:50.138621+00', '2025-06-18 12:35:50.138621+00', 'file-DvLjCd7MrU99HWjAvpnCXH', 'ed6e4a04-137d-47bc-a4a9-79c66bac160e', '"8310b5af9a8ad6dbc39c859d2663ac52"');
INSERT INTO graphite.files VALUES ('3f3c73ef-b78f-4a49-be67-e80bbb724c2c', '2025-06-18 12:35:52.0633+00', '2025-06-18 12:35:52.0633+00', 'file-ADGayXPiw8LbbLQdgs88fk', 'c7305df7-8805-457f-818e-ed7f3ec0e0b8', '"e6d3f254d09604c01a1b259deadf8c49"');
INSERT INTO graphite.files VALUES ('fd22dbaf-3446-4482-a9b0-9bd4fc3de75f', '2025-06-18 12:35:53.43342+00', '2025-06-18 12:35:53.43342+00', 'file-EESvV1oySaW1znQVx31GyJ', '017d4c0d-bef4-474d-952f-2a8499357783', '"13b0ddf6935c5b560dea05b57cccf6ac"');
INSERT INTO graphite.files VALUES ('ee79aca7-31a1-485c-9502-09736e321c34', '2025-06-18 12:35:54.95584+00', '2025-06-18 12:35:54.95584+00', 'file-BLH8YJ9nz5fj9bczM7EhMA', '444a4d43-8666-4bed-b52c-2ba4d07a2a52', '"3a0c018aa99b9bd706445118f6b29799"');
INSERT INTO graphite.files VALUES ('092d75e4-6ee8-468a-93dd-14aecec2f417', '2025-06-18 12:35:55.03548+00', '2025-06-18 12:35:55.03548+00', 'file-Sk3PWh3PQm7iibPgdaGMRC', '4f921957-d80a-415e-beb8-146edd41791b', '"4b91271eced7ece5131ad097bdf3555e"');
INSERT INTO graphite.files VALUES ('6347041f-3bb0-417e-8f25-009b11172a5b', '2025-06-18 12:35:55.036857+00', '2025-06-18 12:35:55.036857+00', 'file-U6jtxVpL1EK987t4E6Q42r', 'c8bd38c6-7cba-4875-827e-9e19f55e1da1', '"6fe1bb19192fe3a38d8d723230916015"');
INSERT INTO graphite.files VALUES ('67411142-2ba3-49b4-bc2d-12d71af473d9', '2025-06-18 12:35:55.053652+00', '2025-06-18 12:35:55.053652+00', 'file-1qj1Vb12DK4TtwVmjBjTQz', '08704f97-3df2-490c-a3b6-df3978b44ee0', '"5767b373d91af809cc3f2472995fcc0b"');
INSERT INTO graphite.files VALUES ('643f0e6f-d206-4ed2-8860-eddb23c333e9', '2025-06-18 12:35:55.099222+00', '2025-06-18 12:35:55.099222+00', 'file-Rq2nphvrJPQA5kE5AzpKnS', '32973294-8a23-44c3-a659-b37cdcf88024', '"98e37e96be7aaf92284d866152f7b7d3"');
INSERT INTO graphite.files VALUES ('c7fd6586-9d68-4365-ad65-02a0c43ea0b8', '2025-06-18 12:35:55.363797+00', '2025-06-18 12:35:55.363797+00', 'file-NBLhGcppCSn1BbtGwhN8Fp', 'df3467f6-79d1-4c77-a084-6c4098f5891d', '"41474bc5a1825390568c8b994711a353"');
INSERT INTO graphite.files VALUES ('4da685b1-d3e0-469b-9e13-2e0dc6978cb9', '2025-06-18 12:35:55.373476+00', '2025-06-18 12:35:55.373476+00', 'file-97GfyvYRsvH88xktQK3iX1', '992816b2-3fb7-4026-8d56-1104a553842c', '"57dcc9dac81a4d9aa54d567d3f418db2"');
INSERT INTO graphite.files VALUES ('05b6946a-3940-4eed-9468-75b26b719b41', '2025-06-18 12:35:55.834675+00', '2025-06-18 12:35:55.834675+00', 'file-Fi4983YraiYFN1e3k7ypnA', '2e4203b2-49e7-4562-bf66-74bbba9b1e40', '"b502f497aa7a96a7d1be4c98e682a6b1"');
