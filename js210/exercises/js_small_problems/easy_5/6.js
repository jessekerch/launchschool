function sequence(maxNum) {
  const numArray = [];

  for (let num = 1; num <= maxNum; num += 1) {
    numArray.push(num);
  }
  
  console.log(numArray);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]