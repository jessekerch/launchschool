function populationCount(number) {
  console.log(number);
  if (number === 0) {
    return;
  }
  populationCount(number - 1);
}

populationCount(5);
