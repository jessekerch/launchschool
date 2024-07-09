function concatenate(a, b) {
  return a + b;
}

const result = concatenate("Hello", "World");
const numericResult = concatenate(1, 2);

console.log(result);
console.log(numericResult);

// above is no good because we can't explicitly type the return, let's separate

function concatenateString(a: string, b: string): string {
  return a + b;
}

function concatenateNumber(a: number, b: number): number {
  return a + b;
}

