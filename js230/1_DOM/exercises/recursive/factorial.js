function factorial(num) {
  // base case: factorial of 0 is 1
  if (num === 0) {
    return 1;
  }

  // recursive case: x! = x * (x - 1)!
  return num * factorial(num - 1);
}

console.log(factorial(5));
