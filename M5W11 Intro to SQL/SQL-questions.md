SELECT Challenges

1. Count the total number of authors.
   Goal: Practice COUNT on the authors table.

```sql
SELECT Count(*) As total_authors from authors;
```

2. Find all funny authors (is_funny = TRUE).
   Goal: Use a WHERE clause to filter boolean values.

```sql
SELECT * From authors where is_funny = true;
```

3. List all jokes with a rating of 5.
   Goal: Filter rows in the jokes table based on a specific value.

```sql
SELECT * FROM jokes WHERE rating = 5;
```

4. List all jokes along with their authors’ names.
   Goal: Perform a basic INNER JOIN.

```sql
SELECT jokes.question, authors.name As Author_name
FROM jokes
JOIN authors ON jokes.author_id = authors.id;
```

5. Find jokes with missing answers (NULL) and their authors (if available).
   Goal: Practice filtering for NULL values and using a LEFT JOIN.

```sql
SELECT jokes.question, authors.name AS Author_name
FROM jokes
Left JOIN authors on jokes.author_id = authors.id
WHERE jokes.answer IS NULL;
```

6. Get the average joke rating.
   Goal: Use aggregate functions (AVG).

```sql
SELECT AVG(rating) as Average_rating from jokes;
```

7. Find all jokes by funny authors.
   Goal: Combine a JOIN with a WHERE clause.

```sql
SELECT jokes.question, authors.name as Author_name
from jokes
JOIN authors ON jokes.author_id = authors.id
WHERE is_funny = true;
```

8. List the total number of jokes for each author.
   Goal: Use GROUP BY to aggregate data and COUNT to count rows.

```sql
SELECT COUNT(jokes.id), authors.name
from jokes
JOIN authors On authors.id = jokes.author_id
GROUP BY authors.name;
```

9. List authors who have more than 2 jokes.
   Goal: Use HAVING to filter grouped data.

```sql
SELECT authors.name, COUNT(jokes.id) as total_jokes
FROM authors
JOIN jokes on authors.id = jokes.author_id
GROUP BY authors.name
HAVING Count(jokes.id) > 2;
```

10. List all authors and include their jokes (if any).
    Goal: Practice a LEFT JOIN to include authors without jokes.

11. Find the top 3 highest-rated jokes.
    Goal: Use ORDER BY with LIMIT.

12. Find the lowest-rated joke along with its author.
    Goal: Combine ORDER BY, LIMIT, and a JOIN.

13. List all jokes grouped by their rating, along with the count of jokes for each rating.
    Goal: Use GROUP BY to group by a numeric column and COUNT to aggregate.

14. Find all authors whose jokes have an average rating of 4 or higher.
    Goal: Combine GROUP BY and HAVING to filter grouped results.

```sql
SELECT authors.name, AVG(jokes.rating) as average_rating
FROM jokes
JOIN authors ON jokes.author_id = authors.id
GROUP BY authors.name
HAVING AVG(jokes.rating) >= 4;
```

Bonus Challenge: 15. List authors who don’t have any jokes.
Goal: Use a LEFT JOIN with a WHERE clause to find unmatched rows.
