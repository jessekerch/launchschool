function getSubstr(str, index, length) {
  let subStr = '';
  for (let count = 1; count <= length; count += 1) {
    subStr += str[index];
    index += 1;
  }
  return subStr;
}

function indexOf(sentence, subString) {
  let max = sentence.length - subString.length;
  for (let index = 0; index <= max; index += 1) {
    if (getSubstr(sentence, index, subString.length) === subString) return index;
  }
  return -1;
}

function lastIndexOf(sentence, subString) {
  let max = sentence.length - subString.length;
  for (let index = max; index >= 0; index -= 1) {
    if (getSubstr(sentence, index, subString.length) === subString) return index;
  }
  return -1;
}

/* PEDAC
Problem 
Write two functions that each take two strings as arguments.
1. indexOf function returns beginning index of first instance substring firstString in secondString
2. lastIndexOf returns beginning index of last instance of substring in sentence

+ Return -1 if no match
+ Can only use #length of string and string[idx] accessor

Algo:
getSubstr, takes three params: string, index, and length
declare substring as blank string
loop and iterate index 0 to (length of string - 1)
  add char at current index to substring
end iteration
return substring

indexOf:
iterate through each single char of sentence
  (for loop index from 0 up to sentence length - subString length)
  if getSubstr* of sentence starting at index matches subString, return subString

lastIndexOf:
iterate through each single char of sentence
  (for loop index from sentence length - subString length) down to 0
  if getSubstr* of sentence starting at index matches subString, return subString


*/


console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1