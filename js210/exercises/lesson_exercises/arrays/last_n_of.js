function lastNOf(arr, count) {
  let start = arr.length - count;
  let newArr = arr.slice(start, start + count);

  return newArr;
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));    // returns [16, 23, 42]
