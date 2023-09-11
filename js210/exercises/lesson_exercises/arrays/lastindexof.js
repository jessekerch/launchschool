function lastIndexOf(array, value) {
  for (let idx = array.length - 1; idx >= 0; idx -= 1) {
    if (array[idx] === value) return idx;
  }
  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));         // 3
console.log(lastIndexOf([1, 2, 3], 4));            // -1
