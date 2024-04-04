function processDataPromise(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processed = numbers.map(num => num * 2);
      resolve(processed);
    }, 1000);
  })
}

// Example usage:
processDataPromise([1, 2, 3]).then((processedNumbers) => {
  console.log(processedNumbers);
  // After 1 second, logs: [2, 4, 6]
});