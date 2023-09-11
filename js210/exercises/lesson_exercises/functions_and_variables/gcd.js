// const gcd = (one, two) => {
//   high = Math.max(one, two);
//   low = Math.min(one, two);
//   for (let div = low; div >= 1; div -= 1) {
//     if (one % div === 0 && two % div === 0) return div;
//   }
//   return 1;
// }

function gcd(num1, num2) {
  var temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
console.log(gcd(4, 12));    // 1

