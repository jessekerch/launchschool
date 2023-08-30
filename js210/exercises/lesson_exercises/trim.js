/*
P: Write a function that takes a string as an argument,
and returns the string stripped of spaces from both ends.
Do not remove or alter internal spaces.

Examples below
Data: Strings and substrings[indx]
Algo:

function getStart (count leading spaces, if any, and return firstChar index)
declare start as 0
iterate index from 0 up to string length - 1
  if character at string[index] is a space ' ', add +1 to start
  else return start;
return string length - 1;  (in case they're all spaces)

function getFinish (count ending spaces, if any, and return lastChar index)
declare finish as string length - 1
iterate index from finish down to 1
  if character at string[index] is a space ' ', subtract -1 to finish
  else return finish;
return 1;  (in case they're all spaces except index 0)

function trim
declare subString as blank string ''
get firstCharIdx with getStart
if firstCharIdx = length of string - 1, return blank '' (it's all spaces..)
get lastCharIdx with getFinish

iterate index from firstCharIdx up to lastCharIdx
  add character at string[index] to subString
return subString

*/
function getStart(string) {
  let start = 0;
  for (let index = start; index <= string.length - 1; index += 1) {
    if (string[index] === ' ') {
      start += 1;
    } else {
      return start;
    }
  }
  return -1;  // if there are no characters or all spaces
}

function getFinish(string) {
  let finish = string.length - 1;
  for (let index = finish; index > 0; index -= 1) {
    if (string[index] === ' ') {
      finish -= 1;
    } else {
      return finish;
    }
  }
  return -1;  // if there are no characters or all spaces
}

function trim(string) {
  let subString = '';
  let firstCharIdx = getStart(string);
  if (firstCharIdx === -1) return '';
  let lastCharIdx = getFinish(string);
  for (index = firstCharIdx; index <= lastCharIdx; index += 1) {
    subString += string[index];
  }
  return subString;
}


console.log(trim('  abc  ') === "abc");
console.log(trim('abc   ') ===  "abc");
console.log(trim(' ab c') === "ab c");
console.log(trim(' a b  c') === "a b  c");
console.log(trim('      ') ===  "");
console.log(trim('') === "");