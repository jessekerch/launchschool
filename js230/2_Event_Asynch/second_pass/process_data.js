function processData(arr, cb) {
  setTimeout(() => console.log(arr.map(cb)), 1000);
}

processData([1, 2, 3], (number) => number * 2);
// After 1 second, logs: [2, 4, 6]