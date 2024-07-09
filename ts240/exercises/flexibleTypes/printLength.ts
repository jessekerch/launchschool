function printLength(value: string | string[]): void {
  if (Array.isArray(value)) {
    console.log('Array element count: ' + value.length);
  } else {
    console.log('String length: ' + value.length);
  }
}

printLength(["hello", "world"]);
printLength("hello world");
