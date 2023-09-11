function average(arr) {
  total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }
  return Math.floor(total/arr.length);
}

console.log(average([1, 2, 3, 4, 5]));
