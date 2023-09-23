function findFibonacciIndexByLength(digits) {
  let index = 2n;
  let fibNum = 1n;
  let firstNum = 1n;
  let nextNum = 1n;

while (String(fibNum).length < digits) {
    index += 1n;
    fibNum = firstNum + nextNum;
    firstNum = nextNum;
    nextNum = fibNum;
}

  return index;
}

console.log(findFibonacciIndexByLength(2n)); // === 7;    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n)); // === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n)); // === 45n;
console.log(findFibonacciIndexByLength(16n)); // === 74n;
console.log(findFibonacciIndexByLength(100n)); // === 476n;
console.log(findFibonacciIndexByLength(1000n)); // === 4782n;
console.log(findFibonacciIndexByLength(10000n)); // === 47847n;

// // The last example may take a minute or so to run.