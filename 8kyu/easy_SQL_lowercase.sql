-- EASY SQL LOWERCASE
-- Given a demographics table in the following format:

-- ** demographics table schema **

--     id
--     name
--     birthday
--     race

-- you need to return the same table where all letters are lowercase in the race column.

-- MY SOLUTION
SELECT id, name, birthday, lower(race) AS race
FROM demographics;

-- OTHER CLEVER SOLUTION
UPDATE demographics SET race = LOWER(race);
SELECT * FROM demographics;