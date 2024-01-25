/*
The Luhn formula is a simple checksum formula used to validate a variety of identification numbers,
such as credit card numbers and Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number
to generate the full number. This number must pass the following test:

    Counting from the rightmost digit and moving left, double the value of every second digit
    For any digit that thus become 10 or more, subtract 9 from the result
        1111 becomes 2121
        8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
    Add all these digits together
        1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
        8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0),
then the number is valid according to the Luhn Formula; else it is not valid.
Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula.
This should treat, for example, "2323 2005 7766 3554" as valid.
You can ignore all non-numeric characters in the input string.

input: string
output: string 'valid' or 'invalid'

if empty string, or data type not string, return 'invalid'
replace all non-numeric chars in input string with ''
split string into array of digit strings
convert each digit to a number
reverse array
iterating 0 to last index, double every number with odd index
  if doubled is > 10, subtract 9 from it
reduce array of numbers to a sum
if sum / 10 remainder is 0, return true
  otherwise return 'invalid'

Example:
2323 2005 7766 3554 => 4343 4005 5736 6514 => sum 60 % 10 = 0 => true
1112 2345 => 2122 4385 => sum 27 % 10 != 0 => false
*/

function validLuhnChecksum(numStr) {
  if (numStr === '' || typeof numStr !== 'string') return false;

  let cleanStr = numStr.replace(/[^0-9]/g, '');
  let numbers = cleanStr.split('')
    .map(Number)
    .reverse();

  for (let idx = 0; idx < numbers.length; idx += 1) {
    if (idx % 2 !== 0) numbers[idx] = numbers[idx] * 2;
    if (numbers[idx] > 9) numbers[idx] -= 9;
  }

  let sum = numbers.reduce((acc, num) => acc + num);
  if (sum % 10 === 0) return true;

  return false;

}

console.log(validLuhnChecksum('2323 2005 7766 3554') === true);
console.log(validLuhnChecksum('two2323%# 2 005 7##766 3554.') === true);
console.log(validLuhnChecksum('1111') === false);
console.log(validLuhnChecksum('111') === false);
console.log(validLuhnChecksum('11122345') === false);
console.log(validLuhnChecksum('') === false);
console.log(validLuhnChecksum([]) === false);
