/*
Problem Description

You are given a list of numbers in a "short-hand" range where only the significant part
of the next number is written because we know the numbers are always increasing
(ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different
separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2"
represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

    "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
    "1-3, 1-2" --> 1, 2, 3, 11, 12
    "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
    "104-2" --> 104, 105, ... 112
    "104-02" --> 104, 105, ... 202
    "545, 64:11" --> 545, 564, 565, .. 611

input: string, digits and separators
return: "list of numbers", separated by commas.
Output each number separated by commas on one line?
I'll just return a string of numbers, cool?

rules: 
input always always numbers (number strings / digits) and separators
commas separate either numbers or ranges
if number, and number is less <= last number list number
  add COMPLETE NUMBER to number list
    (how to find COMPLETE number?)
if range, handle as range
  range separators can be ["-", ":", ".."]
  range limits are inclusive
  range start and/or end could be incomplete number
    add all numbers from start to end to number list

algo:
declare result empty array
split input string into comma separated array of strings (1, 3, 7, 104-2, )
map over array elements and convert all ranges to arrays
iterate over array elements
  if element is an array
    map over array and replace significant parts with next numbers
      => nextNum helper
    add getRange of min and max result to result array
      => getRange helper to return consecutive numbers of range
  else (not range)
    add nextNum to result array

    
1, 3, 7, 2, 4, 1 => 1, 3, 7, 12, 14, 21, 
104-2, 0 => [104, 2], 0 => [104, 112], 0 => [104, 105... 111, 112], 0 => [104, 105... 111, 112], 120 => 
1:5:2 => [1, 5, 2] => [1, 5, 12] => [1, 2, 3.. 11, 12]
1-3, 1-2 => [1, 3], [1, 2] => [1, 2, 3], [11, 12]
*/

const rangePattern = new RegExp(/[-:(..)]/);

function getRange(lastResult, numbers) {
  numbers = [lastResult].concat(numbers);
  let rangeNums = numbers.map((part, index) => {
    let prev = (index === 0) ? 0 : numbers[index - 1];
    return getNextNum(prev, part);
  });

  let range = [];
  let min = Math.min(...rangeNums);
  let max = Math.max(...rangeNums);
  for (let num = min; num <= max; num += 1) {
    range.push(num);
  }
  return [...range];
}

function getNextNum(prevNum, nextPart) {
  let num = Number(prevNum) + 1;
  while (!String(num).endsWith(nextPart)) {
    num += 1;
  }
  return num;
}

function shortHand(string) {
  let result = [];
  let numbers = string.split(', ');

  let numsAndArrs = numbers.map((element) => {
    if (rangePattern.test(element)) {
      return element.split(rangePattern);
    } else {
      return element;
    }
  });
  
  numsAndArrs.forEach((element) => {
    let prev = (result.length === 0) ? 0 : result[result.length - 1];
    if (Array.isArray(element)) {
      result.push(...getRange(prev, element));
    } else {
      result.push(getNextNum(prev, element));
    }
  })
  return result;
}

// iterate over array elements
//   if element is an array
//     map over array and replace significant parts with next numbers
//       => nextNum helper
//     add getRange of min and max result to result array
//       => getRange helper to return consecutive numbers of range
//   else (not range)
//     add nextNum to result array

// console.log(getNextNum('545', '9'));

console.log(shortHand("1, 3, 7, 2, 4, 1")); // --> 1, 3, 7, 12, 14, 21
console.log(shortHand("1-3, 1-2")); // --> 1, 2, 3, 11, 12
console.log(shortHand("1:5:2, 0")); // --> 1, 2, 3, 4, 5, 6, ... 12
// console.log(shortHand("1:5:2")); // --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611