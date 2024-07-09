function firstElement<T>(arr: Array<T>): T | undefined {
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined
}

console.log(firstElement([7, 9, 11]));
console.log(firstElement([]));
