function reverse(array) {
  let newArr = [];
  for (let idx = array.length - 1; idx >= 0; idx -= 1) {
    newArr.push(array[idx]);
  }
  return newArr;
}

console.log(reverse(['Smith', 'Jones', 'Cook']));
