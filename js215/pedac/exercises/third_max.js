/*
Given an array of integers, nums, return the third largest number in the array.
If the third largest number does not exist, return the greatest number.

You are not allowed to sort the array.

1 argument? yes
always array of integers? yes
empty array? no, always at least one number
can they be negative integers? yes
any number of numbers? yes
any integer too large to be represented as number primitive? (> 9,007,199,254,740,991? 9 quadrillion?) no
return in number format, not string, correct? yes
duplication? yes, treat as different numbers, compare properly
No third largest, return greatest

compare
if empty, just put it in
if not, 

Example
[3 2 1]
{ first: 3, second: 2, third: 1 }

[3 2 1]
[3, 2, 1] => last index => 1

[1]
[1] => last index => -1 

[1, 2]
[2, 1]

[1, 2, 3]
[3, 2, 1]

data:
input array of numbers
temp array of numbers
return number

algo:
input array of nums
declare highNums blank array
for each number of nums
  if highNums is empty, add number to highNums
  else
    iterate index from 0 to highNums length (0-0 or 0-1 or 0-2)
      if number IS higher than highNums idx
        splice number into highNums at current idx (mutating) splice(idx, 0, number)
        if highNums is longer than 3 elements now, pop off and destroy last element
        set spliced = true
    if no numbers were spliced in (spliced = false) AND highNums is still length < 3
      push number to the end of highNums

if highNums length = 3
  return index 2 element of highNums
else 
  return index 0 element of highNums



*/

function thirdMax(numbers) {
  let highNums = [];
  let spliced;

  numbers.forEach((number) => {
    if (highNums.length === 0) {
      highNums.push(number);
    } else {
      spliced = false;
      for (let idx = 0; idx < highNums.length; idx += 1) {
        if (number > highNums[idx]) { 
          highNums.splice(idx, 0, number);
          if (highNums.length > 3) highNums.pop();
          spliced = true;
          return;
        }
      }
      if (!spliced && highNums.length < 3) highNums.push(number);
    }
  });

  if (highNums.length === 3) {
    return highNums[2];
  } else {
    return highNums[0];
  }
  
}

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2, 3])); // 1
console.log(thirdMax([1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([-100, -101, -102])); // -102
console.log(thirdMax([3, 2, 1, 0, 11, -21])); // 2
console.log(thirdMax([3, 3, 3, 0, -21])); // 3
console.log(thirdMax([3, 3, 0, 0, -21])); // 0
