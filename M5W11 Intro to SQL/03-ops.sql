-- GET ALL OF THE JOKES
  SELECT * FROM jokes;
  SELECT * FROM authors;

-- Where clause
SELECT * FROM jokes WHERE id = 16;
SELECT * FROM jokes WHERE id > 16;
SELECT * FROM jokes WHERE rating < 3;

-- Update
UPDATE jokes set rating = 1 where id = 1;

-- Delete
DELETE FROM jokes where id = 1;

-- Order By
SELECT * FROM jokes ORDER BY author_id DESC;

-- Filter By Text
SELECT * FROM jokes WHERE question = 'What';
SELECT * FROM jokes WHERE question LIKE 'What %';
SELECT * FROM jokes WHERE question LIKE '% call %';
SELECT * FROM jokes WHERE question LIKE '% ma %';
-- toLowerCase()

SELECT * FROM jokes;

-- Full Join
SELECT * FROM jokes JOIN authors ON author_id = authors.id;
SELECT * FROM authors JOIN jokes ON   authors.id = author_id;