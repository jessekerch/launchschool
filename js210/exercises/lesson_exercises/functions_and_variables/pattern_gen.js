function generatePattern(nStars) {
  nStars = parseInt(nStars, 10);
  let numbers = '';
  let index = 0;
  for (let row = 1; row <= nStars; row += 1) {
    let stars = '*'.repeat(nStars - row);
    numbers += String(row);
    console.log(numbers + stars);
    index += 1;
  }
}

generatePattern(8);
