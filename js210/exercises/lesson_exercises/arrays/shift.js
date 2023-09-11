function shift(array) {
  let newLength = array.length - 1;
  let value = array[0];
  for (let idx = 0; idx < array.length; idx += 1) {
    array[idx] = array[idx + 1];
  }
  array.length = newLength;
  return value;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]
