

function safeGet<T>(arr: T[], idx: number): T | undefined {
  if (idx >= 0 && idx < arr.length ) {
    return arr[idx];
  }

  return undefined;
}

const names: string[] = ["John", "Jane"];
const first_name = safeGet(names, 2); // Should return undefined
console.log(first_name);

const numbers: number[] = [1, 2, 3];
const number = safeGet(numbers, 1); // Should return 2
console.log(number);
