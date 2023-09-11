function push(array, element) {
  array[array.length] = element;
  return array;
}

let count = [0, 1, 2];
push(count, 3);         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]
