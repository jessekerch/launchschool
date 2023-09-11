function unshift(array, value) {
  for (let idx = array.length; idx > 0; idx -= 1) {
    array[idx] = array[idx - 1];
  }
  array[0] = value;
}

let count = [1, 2, 3];
unshift(count, 0);      // 4
console.log(count);     // [ 0, 1, 2, 3 ]