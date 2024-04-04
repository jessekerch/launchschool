function basicCallback(cb, num) {
  setTimeout(() => cb(num), 2000);
}

// Example usage:
basicCallback((number) => {
  console.log(number * 2);
}, 5);
// After 2 seconds, logs: 10