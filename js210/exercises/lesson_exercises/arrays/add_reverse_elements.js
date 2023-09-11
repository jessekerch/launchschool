function reverseElements(arr) {
  let reversed = arr.slice(0);

  return reversed.concat(arr.reverse());
}

let digits = [4, 8, 15, 16, 23];

console.log(reverseElements(digits));    // returns [4, 8, 15, 16, 23, 23, 16, 15, 8, 4]
