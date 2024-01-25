/*
Write a function that returns the third greatest prime number less than k.

rules: 
prime number = positive integer greater than 1 with only two factors, 1 and itself
k is the max number and prime numbers must be less than k (not equal)
third greatest less than k means if we have 3 numbers less than k available, it will be the farthest from k 
  => k=7 => primes less than k => 2, 3, 5 => third greatest is 2
if no third greatest prime less than k available, return -1.
negative numbers cannot be prime, return -1
arguments will only be equivalent to numbers, although data type might not be number
any decimal k can be treated as per the rules => 7.1 > 7, 5, 3 so => return 3
can be string containing only digits, if so treat as number
missing argument return -1
empty array return -1
return -1 for Infinity

data:
input: number or equivalent of number
this works for string or array or anything, just check it with > operator which will convert to Number as needed
'7' > 5 ? yes, [7] > 5? yes, [] > 5? no
return integer number, or -1 if invalid or unavailable
return -1 for Infinity

algo:
input k is the max, and I want primes less than k
if k <= 5, return -1 (this will work for empty arrays, missing argument, undefined or null, but not NaN)
if Number k is NaN, return -1
initialize primes to empty array
iterate num from 2 to k (not incl k), increment by 1
  if num is prime => HELPER FUNCTION: isPrime
    push num to primes array

if primes array length < 3
  return -1
else 
  reverse primes and return index 2 of primes array

HELPER isPrime, with num as argument
  iterate div from 2 to num (not incl num)
    if num % div = 0, return false
  return true if num > 1

*/

function isPrime(n) {
  for (let div = 2; div < n; div += 1) {
    if (n % div === 0) return false;
  }

  return n > 1;
}

function thirdGreatestPrime(k) {
  // guard clauses
  if (k <= 5 || k === Infinity || k === -Infinity) return -1;
  if (Number.isNaN(k)) return -1;

  // collect all primes < k
  const primes = [];
  for (let num = 2; num < k; num += 1) {
    if (isPrime(num)) primes.push(num);
  }
  
  // return 3rd greatest prime, or -1
  if (primes.length < 3) {
    return -1;
  } else {
    let revPrimes = primes.reverse();
    return revPrimes[2];
  }
}

console.log(thirdGreatestPrime(7)); // 2
console.log(thirdGreatestPrime(100)); // 83

// more test cases
console.log(thirdGreatestPrime(97)); // 79
console.log(thirdGreatestPrime(30)); // 19
console.log(thirdGreatestPrime(4679)); // 4657

console.log(thirdGreatestPrime(5.1)); // 2
console.log(thirdGreatestPrime(30.1)); // 19
console.log(thirdGreatestPrime('14')); // 7
console.log(thirdGreatestPrime([14])); // 7

console.log(thirdGreatestPrime(4)); // -1
console.log(thirdGreatestPrime(-97)); // -1

console.log(thirdGreatestPrime(0)); // -1
console.log(thirdGreatestPrime()); // -1
console.log(thirdGreatestPrime([])); // -1
console.log(thirdGreatestPrime(NaN)); // -1
console.log(thirdGreatestPrime(Infinity)); // -1
console.log(thirdGreatestPrime(-Infinity)); // -1
