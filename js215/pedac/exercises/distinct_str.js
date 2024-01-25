"use strict";

/*

A distinct string is a string that is present only once in an array.

Given an array of strings, arr, and an integer, k,
return the kth distinct string present in arr.
If there are fewer than k distinct strings, return an empty string "".

Note that the result string is the one encountered earliest in the array.

rules:
distinct string: present only once in an array
looking at only distinct strings
kth distinct string counting from 1, 2, 3... k
return the kth distinct string
keep the distinct string encountered first in the array
no empty slots / sparse arrays
empty strings in array should be ignored
blank spaces should be considered a character and distinct if only space/s
undefined, null, etc not existing, only strings
numbers not existing, only strings
yes case sensitive
always at least one element in array
return empty string if distinct string count < k
strings in array can be of any length

input: array of strings, arr
  number, integer, k, always positive integer
  arr, array of strings


data:
array and number inputs
string return value
O use another array to keep seen strings to check each arr element against?
X use object for distinction/string counts?

steps:
go through strings and only keep distinct ones with length > 0
if length of distinct strings >= k, return the kth string
otherwise return ""

Example
arr = ["d","b","c","b","c","a"]
k = 2
result = "a"

[d, a]
index k - 1 => result index 1 => 'a' => 'a' => true

console.log(distinctString(["", "a"], 1)); // "a"
[NOT'', 'a'] 

input arr array of strings
input k, number, kth string to return
declare result, empty array of distinct strings
declare distinct = true
iterate candidate index from 0 to length of arr array
  candidate string is arr element at current candidate index
  distinct = true
  iterate check index from 0 to length of arr array
    check string is arr element at current check index
    if candidate index = check index, skip it
    if candidate string = check string, distinct = false, and break loop
  end check index loop
  if distinct = true, push candidate string (candidate index element of arr) to distinct array

return (k-1) index element of distinct array 
  or return empty string if distinct array length less than k

*/

  // accumulator: The return value of the previous callback invocation (this is the initial value on the first iteration)
  // currentValue: The value of the current element in the Array
  // currentIndex: The index of the current element
  // array: The array being processed


  // let matches = arr.map(candidate => {
  //   return arr.filter((check) => check === candidate);
  // });
  // console.log(matches);
  // return matches.filter((arr) => arr.length === 1).flat();
  
  // function distinctString(arr, k) {
  //   let result = [];
  //   let distinct;
  //   if (k > arr.length) return '';
  //   for (let candIdx = 0; candIdx < arr.length; candIdx += 1) {
  //     if (arr[candIdx] === '' || arr[candIdx] === undefined) continue;
  //     distinct = true;
  //     for (let checkIdx = 0; checkIdx < arr.length; checkIdx += 1) {
  //       if (candIdx === checkIdx || arr[checkIdx] === '') continue;
  //       if (arr[candIdx] === arr[checkIdx]) {
  //         distinct = false;
  //         checkIdx = arr.length;
  //       }
  //     }
  //     if (distinct && arr[candIdx] !== null) result.push(arr[candIdx]);
  //   }
  
  //   if (result.length < k) return ''; 
  //   return result[k - 1];
  // }
  
  // .reduce((acc, curr) => {
  //   let newAcc = acc.slice();
  //   if (counts[curr] === 1) newAcc.push(curr);
  //   return newAcc;
  // }, []);
  
  function distinctString(arr, k) {
  let cleanArr = arr.filter((str) => str);
  let counts = cleanArr.reduce((obj, curr) => {
    obj[curr] = obj[curr] || 0;
    obj[curr] += 1;
    return obj;
  }, {});
  let distinct = Object.keys(counts)
    .filter((key) => counts[key] === 1);
  return distinct[k - 1] || "";
}

console.log(distinctString(["a", "b", "c", "b"], 2)); // "c"
console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
console.log(distinctString(["d","b","c","b","c","a"], 1)); // "d"
console.log(distinctString(["d","b","c","b","c","a"], 3)); // ""
console.log(distinctString(["str","str","str","b","b","str"], 3)); // ""
console.log(distinctString(["$%^d","B89","c 09 ",""," ","b89"], 2)); // "B89"
console.log(distinctString(["", "a"], 1)); // "a"
console.log(distinctString(["", "a", , "b"], 2)); // "b"
console.log(distinctString(["", "a", null, "b"], 2)); // "b"
console.log(distinctString(["", "a", null, "b"], 5)); // ""
console.log(distinctString([], 1)); // ""

