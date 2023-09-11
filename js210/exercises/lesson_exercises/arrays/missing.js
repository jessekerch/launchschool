function missing(arr) {
  let missingValues = [];
  let start = arr[0];
  let finish = arr[arr.length - 1];

  for (let num = start; num < finish; num += 1) {
    if (arr.indexOf(num) === -1) missingValues.push(num);
  }

  return missingValues;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
