function outputOdds(min, max) {
  for (let num = min; num <= max; num += 2) {
    if (num % 2 === 0) continue;
    console.log(num);
  }
}

outputOdds(1, 99);
