function subtract(initial: number, values: number[]): string {
  let remaining = initial;
  for (const value of values) {
    remaining -= value;
  }
  return "The result is: " + remaining;
}
