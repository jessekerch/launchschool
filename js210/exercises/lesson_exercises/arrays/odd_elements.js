function oddElementsOf(arr) {
  let oddDigits = [];

  for (let idx = 1; idx < arr.length; idx += 2) {
    oddDigits.push(arr[idx]);
  }
  return oddDigits;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]