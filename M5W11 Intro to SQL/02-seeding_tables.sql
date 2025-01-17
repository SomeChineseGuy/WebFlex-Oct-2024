INSERT INTO authors(name, description, is_funny) VALUES ('Francis', 'Oh boy, he is a teacher', true);

INSERT INTO authors (name, is_funny, description) VALUES ('Paul', TRUE, 'A student in march01');
INSERT INTO authors (name, is_funny, description) VALUES ('Mike', TRUE, 'A student in march01');
INSERT INTO authors (name, is_funny, description) VALUES ('Grigor', TRUE, 'A student in march29');
INSERT INTO authors (name, is_funny, description) VALUES ('Zack', TRUE, 'A student in march29');
INSERT INTO authors (name, is_funny, description) VALUES ('Anton', FALSE, 'A student in july 19');
INSERT INTO authors (name, is_funny, description) VALUES ('Aphy', TRUE, 'A student in july 19');
INSERT INTO authors (name, is_funny, description) VALUES ('Alex', TRUE, 'A student in july 19');
INSERT INTO authors (name, is_funny, description) VALUES ('Dusty', FALSE, 'A student in nov 22');
INSERT INTO authors (name, is_funny, description) VALUES ('Olga', TRUE, 'A student in nov 22');
INSERT INTO authors (name, is_funny, description) VALUES ('Luciana', TRUE, 'A student in nov 22');
INSERT INTO authors (name, is_funny, description) VALUES ('Aldwin', FALSE, 'A student in sept 19');
INSERT INTO authors (name, is_funny, description) VALUES ('Matt', TRUE, 'A student in sept 19');

INSERT INTO 
  jokes(question, answer, rating, author_id)
VALUES
  ('Knock knock, whos there, to who', 'no, to whom',3, 1),
  ('How is a bouncer at a club like a dish soap?', 'They both DETER GENTS', 5, 2),
  ('What do you call a belt made out of watches?', 'A waist of time.', 5, 3),
  ('Why do programmers mix hallowen and christmas', 'because OCT 31 === DEC 25',10, 1),
  ('You know you should knock on your fridge door before opening it', 'There might by a salad dressing',5, 4),
  ('Why did the chicken cross the road?', 'Because there was a green light',4.46, 7),
  ('What is small, green and goes up and down?', 'A green pea in an elevator',4.46, null),
  ('Did you hear about the monkeys who shared an Amazon account?', 'They were Prime mates.',4, 6),
  ('Did you recognize that 2022 sound like 2020 too', NULL ,3, 10),
  ('What do you call a fly without wings?', 'A walk',5, 9),
  ('What do you call a bear with no teeth?', 'A Gummy Bear',4, 1),
  ('What do you call an indecisive bee?', ' A maybe.',5, 12),
   ('Why did the scarecrow win an award?', 'Because he was outstanding in his field.', 4.5, 2),
  ('What do you call fake spaghetti?', 'An impasta.', 5, 3),
  ('Why don’t skeletons fight each other?', 'They don’t have the guts.', 4, 4),
  ('Why couldn’t the bicycle stand up by itself?', 'It was two tired.', 4.8, 5),
  ('What do you call cheese that isn’t yours?', 'Nacho cheese.', 5, 6),
  ('Why couldn’t the leopard play hide and seek?', 'Because he was always spotted.', 3.5, 7),
  ('What do you call a magic dog?', 'A Labracadabrador.', 4.6, 8),
  ('Why do cows have hooves instead of feet?', 'Because they lactose.', 4.7, 9),
  ('What did one wall say to the other?', 'I’ll meet you at the corner.', 3.9, 10),
  ('Why did the golfer bring two pairs of pants?', 'In case he got a hole in one.', 5, 11),
  ('Why don’t eggs tell jokes?', 'They’d crack each other up.', 4.2, 12),
  ('What do you call a can opener that doesn’t work?', 'A can’t opener.', 4.1, 2),
  ('How do you organize a space party?', 'You planet.', 4.5, 1),
  ('What’s orange and sounds like a parrot?', 'A carrot.', 3.8, 3),
  ('Why did the tomato blush?', 'Because it saw the salad dressing.', 4.6, 4),
  ('Why don’t scientists trust atoms?', 'Because they make up everything.', 5, 5),
  ('How do you make a tissue dance?', 'You put a little boogie in it.', 4.3, 6),
  ('What did the fish say when it hit the wall?', 'Dam.', 3.9, 7),
  ('What do you call a snowman with a six-pack?', 'An abdominal snowman.', 4.4, 8),
  ('Why couldn’t the astronaut book a hotel on the moon?', 'Because it was full.', 4.7, 9);
