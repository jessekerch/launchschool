function basicCallback(cb, n) {
  setTimeout(() => cb(n), 2000);
}

basicCallback((number) => {
  console.log(number * 2);
}, 5);
// After 2 seconds, logs: 10

// This function should execute the callback, passing it the number after 2 seconds using setTimeout.
// The callback should then multiply the number by 2 and log the result.