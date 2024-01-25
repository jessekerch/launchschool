/*

Write a function, primeNumberPrinter, that
prints all prime numbers present as substrings in a given string.

rules:
prime number n can't be divided evenly by any lesser integer from 1 to n
prints as array
exactly one input argument
always string
if empty return empty array
numbers are consecutive with any non-numeric character in between _ %`.etc
negative numbers? yes we could see those as well, but a prime number is an interger greater than 1
yes we could have repetition, its a prime even if repeated
return in order discovered OK? yes

Example
a-4bc2k13d => [-4, 2, 13] => [2, 13]

-4 prime? absolute 4 divided by everything from 2 to 4 => 4/2 => 2 so no... 
2 prime? absolute 2 divided by nothing (nothing between 2 and 2) => so yes
13 prime? absolute 13 divided by 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 => nothing remainder 0, so yes!

Data
input: string
interm: array and string
output: array

algo:
if input is empty string, return empty array
get array of numbers, pos and neg
  use regex to extract matches of numbers or negative numbers from input string
  convert them all to numbers from strings
iterate through array of numbers
if number is prime, add to primes
  IS PRIME HELPER =>
    iterate div from 2 to (not incl) abs of number
    if number % div = 0 return false 
    at end of iteration, return true (not false...)


*/
function isPrime(num) {
  for (let div = 2; div < num; div += 1) {
    if (num % div === 0) return false;
  }
  return num > 1;
}

function primeNumberPrinter(string) {
  if (string.length === 0) return [];
  let result = [];
  let array = string.match(/[-]?[0-9]+/g);
  let numbers = array.map((num) => Number(num));
  numbers.forEach((number) => {
    if (isPrime(number)) result.push(number);
  });

  return result;
}

console.log(primeNumberPrinter("a4bc2k13d")); [2, 13]
console.log(primeNumberPrinter("a4bc2k-13d")); // [2, -13]
console.log(primeNumberPrinter("5 7d-11*=13.17  19!d23dax29undefined97")); // [5, 7, -11, 13, 17, 19, 23, 29, 97]
console.log(primeNumberPrinter("")); []
