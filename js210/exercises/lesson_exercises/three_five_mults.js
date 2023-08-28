function multiplesOfThreeAndFive(range) {
  const start = range[0];
  const finish = range[1];
  for (let num = start; num <= finish; num += 1) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(String(num) + '!');
    } else if (num % 3 === 0 || num % 5 === 0) {
      console.log(String(num));
    }
  }
}

range = [1, 100]
multiplesOfThreeAndFive(range);
