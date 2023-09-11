function indexOf(array, value) {
  for (let idx = 0; idx < array.length; idx += 1) {
    if (array[idx] === value) return idx;
  }
  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1
