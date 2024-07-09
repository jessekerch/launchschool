function isStringArray(arr: unknown[]): boolean {
  return (arr as string[]).every(elem => typeof elem === 'string');
}

console.log(isStringArray([1, 2, 3]));
console.log(isStringArray(["test", "string"]));
