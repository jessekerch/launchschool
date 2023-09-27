function merge(arr1, arr2) {
  const leftArr = arr1.slice();
  const rightArr = arr2.slice();

  // if (leftArr.length === 0) return rightArr;
  // if (rightArr.length === 0) return leftArr;

  const result = [];
  while (leftArr.length > 0 || rightArr.length > 0) {
    if (leftArr.length > 0) result.push(leftArr.shift());
    if (rightArr.length > 0) result.push(rightArr.shift());
  }

  return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([1], []));             // [1]