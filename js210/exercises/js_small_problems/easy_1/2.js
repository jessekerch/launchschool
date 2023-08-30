function outputEvens(min, max) {
  for (let num = min; num <= max; num += 1) {
    if (num % 2 === 1) continue;
    console.log(num);
  }
}

outputEvens(1, 99);
