# Write your MySQL query statement below
# Write your MySQL query statement below
SELECT person.firstname, person.lastname, address.city, address.state FROM person LEFT JOIN address on person.personid = address.personid;