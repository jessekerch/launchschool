function firstNOf(arr, count) {
  let firstNelements = [];

  for (let idx = 0; idx < count; idx += 1) {
    firstNelements.push(arr[idx]);
  }

  return firstNelements;
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [4, 8, 15]