function splice(array, start, number) {
  newArr = [];
  leftoverArr = [];
  for (let idx = 0; idx < array.length; idx += 1) {
    if (idx >= start && number > 0) {
      newArr.push(array[idx]);
      number -= 1;
    } else {
      leftoverArr.push(array[idx]);
    }
  }
  count = leftoverArr;
  return newArr;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]
