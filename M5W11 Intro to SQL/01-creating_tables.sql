DROP TABLE IF EXISTS authors;
CREATE TABLE authors(
  -- Primary Key
  id SERIAL PRIMARY KEY,
  name VARCHAR(225) NOT NULL,
  description text,
  is_funny boolean
);

DROP TABLE IF EXISTS jokes;
CREATE TABLE jokes(
  id SERIAL PRIMARY KEY,
  question text NOT NULL,
  answer text ,
  rating int,
  author_id INT REFERENCES authors(id) ON DELETE CASCADE
);