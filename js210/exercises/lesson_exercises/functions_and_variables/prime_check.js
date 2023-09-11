function isPrime(num) {
  if (num <= 1) return false;

  for (div = 2; div < num; div += 1) {
    if (num % div === 0) return false;
  }

  return true;
}

console.log(isPrime(1) === false);
console.log(isPrime(2) === true);
console.log(isPrime(3) === true);
console.log(isPrime(43) === true);
console.log(isPrime(55) === false);
console.log(isPrime(0) === false);