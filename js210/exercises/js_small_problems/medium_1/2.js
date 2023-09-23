function rotateRightmostDigits(num, n) {
  let digits = String(num);
  let idx = digits.length - n;

  return digits.slice(0, idx) + digits.slice(idx + 1) + digits[idx];
}

function maxRotation(number) {
  for (let n = 1; n < number.length; n += 1) {
    number = rotateRightmostDigits(number, n);
  }
  return number;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845