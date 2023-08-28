function logMultiples(mult) {
  let max = Math.floor(100 / mult) * mult;
  let min = mult;

  for (num = max; num >= min; num -= mult) {
    if (num % 2 === 1) console.log(num);
  }
}

logMultiples(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

logMultiples(21);
// output (3x and 1x)
// 63
// 21
