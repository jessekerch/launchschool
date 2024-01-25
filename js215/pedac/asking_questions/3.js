// Given an array of integers, nums, return the third largest number in the array.
// If the third largest number does not exist, return the greatest number.

// You are not allowed to sort the array.

// Example

/*
Questions
- Will I always get exactly one argument? What if it is missing? How should I handle more than one argument?
- Will the array always contain only integers? How should I handle non-integers? Special numbers?
- Will the array ever contain 0 or negative numbers? 
- Can the array be any number of elements? What if it's empty? What should I return for empty array?
- Will the array ever have less than 3 elements? What should I return in that case?
- If there are more than one matching greatest number, or all numbers are equal, should I just return one of the greatest?
- Can I manually sort the array? Just not using the sort function?
- Can the numbers be any number? 
*/

thirdMax([3, 2, 1]); // 1