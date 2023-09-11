function slice(array, start, end) {
  let newArr = [];
  for (let idx = start; idx < end; idx += 1) {
    newArr.push(array[idx]);
  }
  return newArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]
