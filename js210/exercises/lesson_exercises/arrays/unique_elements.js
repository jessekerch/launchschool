function uniqueElements(arr) {
  let uniqueArr = [];
  arr.forEach(value => {
    if (!uniqueArr.includes(value)) uniqueArr.push(value);
  });

  return uniqueArr;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []