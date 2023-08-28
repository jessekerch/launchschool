function logOddNumbers(topNum) {
  for (let num = 1; num <= topNum; num += 2) {
    if (num % 2 === 0) continue;
    console.log(num);
  }
}

logOddNumbers(19);

