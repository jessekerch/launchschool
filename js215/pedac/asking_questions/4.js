/* 
​ Write a function that takes a two-dimensional array as the argument
and turns it into a flat array with all duplicated elements removed.
Treat numbers and number strings (e.g., 1 and '1') as duplicates,
and keep the one that comes first in the result.

Questions
- How should I handle if I get more or less than one argument?
- Will input array ever contain more or less than two subarrays?
- Will subarray elements always be numbers and single character strings?
- How to handle negative numbers or zero or non-integers?
- What about special characters, NaN, Infinity, -Infinity, etc?
- How to handle empty strings, or empty slots (sparse array)?
- What about multi digit numbers like 23 to match '23' only or '2' and '3' as well? 
- What about floats like 1.0 === 1?
- Can the subarrays contain objects? Are they duplicates if they have same key-value pairs?

*/

flattenAndUnique([]); // []
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']
