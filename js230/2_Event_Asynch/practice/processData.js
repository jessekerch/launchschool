function processData(numbers, callback) {
  setTimeout(() => {
    console.log(numbers.map(callback));
  }, 1000);
}

processData([1, 2, 3], (number) => number * 2);