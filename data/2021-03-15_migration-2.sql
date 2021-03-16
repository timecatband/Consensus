CREATE TABLE nodes_copy ( graph_key text, id text, label text, link text, text text, x real, y real, meta text, PRIMARY KEY(graph_key, id) )

INSERT INTO nodes_copy (graph_key, id, label, link, text, x, y, meta)
SELECT graph_key, id, label, "", text, x, y, meta
FROM nodes;

DROP TABLE nodes;

ALTER TABLE nodes_copy RENAME TO nodes; 
