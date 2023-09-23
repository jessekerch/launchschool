function buyFruit(fruitList) {
  const result = [];

  fruitList.forEach(fruitCount => {
    let count = 0;
    while (count < fruitCount[1]) {
      result.push(fruitCount[0]);
      count += 1;
    }
  });

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]