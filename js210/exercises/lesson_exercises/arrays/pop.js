function pop(array) {
  let shorterLength = array.length - 1;
  let element = array[shorterLength];
  array.length = shorterLength;
}

let count = [1, 2, 3];
pop(count);             // 3
console.log(count);                  // [ 1, 2 ]