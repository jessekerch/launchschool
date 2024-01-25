/* PEDAC
Problem: 
Write a program that deals with "Boomerang" arrays:
    Boomerang arrays consist of a sequence of increasing numbers followed by a sequence of decreasing numbers; or, a sequence of decreasing numbers followed by a sequence of increasing numbers.

Rules:
1. true: sequence of increasing followed by decreasing (BOTH including elbow)
2. true: sequence of decreasing followed by increasing (BOTH including elbow)
4. asymmetric edges are OK
3. false: length less than 3
3. false: length is odd / needs to have a middle "elbow"
5. false: if not an array
5. false: if anything except numbers in there

Example:
[4, 2, 0, 2, 4] is a boomerang array
[3, 1, 1, 3] is NOT a boomerang
[0, 2, 4, 5, 4, 2, 1] is a boomerang array
[3, 3, 1, 3, 3] is NOT a boomerang

Data:
Arrays for sure

Algo:
return false if length < 3 OR length is not odd
return false argument not an array OR some elements aren't Numbers

set elbow to the middle element
set first half to first half incl elbow
set second half to second half incl elbow
if first half is NOT increasing (ie first half could be decreasing)
  if first half is NOT decreasing (ie first half could be increasing)
    return false
  else if first half IS increasing
    if second half is NOT increasing
      return false
    else if second half is increasing
      return true
else (ie first half IS decreasing)
  if second half is NOT increasing
    return false
  else if second half IS increasing
    return true

isIncreasing:
iterate from index 0 of array up to not incl length - 1
  if index + 1 element <= index element, return false
return true at end, if false not already returned

isDecreasing:
isIncreasing ( array.reverse() )
*/

function NumberArray(numbers) {
  this.numbers = numbers;
  this.elbowIdx = Math.floor(numbers.length / 2);
  this.firstHalf = numbers.slice(0, this.elbowIdx);
  this.secondHalf = numbers.slice(this.elbowIdx + 1)
}

NumberArray.prototype.isIncreasing = function(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] <= array[i]) return false;
  }

  return true;
};

NumberArray.prototype.isDecreasing = function(array) {
  return this.isIncreasing(array.reverse());
};

NumberArray.prototype.isBoomerang = function() {
  if (this.numbers.length < 3 || this.numbers.length % 2 === 0) {
    return false;
  }

  if (this.isIncreasing(this.firstHalf)) {
    if (this.isDecreasing(this.secondHalf)) {
      return true;
    } else {
      return false;
    }
  } else if (this.isDecreasing(this.firstHalf)) {
    if (this.isIncreasing(this.secondHalf)) {
      return true;
    } else {
      return false;
    }
  }

  return false;
};

console.log(new NumberArray([0, 1, 2, 3, 2, 1, 0]).isBoomerang() === true);
console.log(new NumberArray([4, 2, 0, 2, 4]).isBoomerang() === true);
console.log(new NumberArray([0, 2, 2, 3, 2, 1, 0]).isBoomerang() === false);
console.log(new NumberArray([4, 2, 0, 0, 2, 4]).isBoomerang() === false);
console.log(new NumberArray([0, 1, 2, 3, 4, 1, 0]).isBoomerang() === true);
console.log(new NumberArray([4, 2, 1, 0, 3]).isBoomerang() === true);
console.log(new NumberArray([1, 2, 4, 2, 1, 2, 4]).isBoomerang() === false);
console.log(new NumberArray([1, 2, 3, 4]).isBoomerang() === false);
console.log(new NumberArray([4, 3, 2, 1]).isBoomerang() === false);
console.log(new NumberArray([1, 10, 1]).isBoomerang() === true);
console.log(new NumberArray([1]).isBoomerang() === false);