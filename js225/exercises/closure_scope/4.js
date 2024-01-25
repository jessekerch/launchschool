function makeCounterLogger(num2) {
  return function(num1) {
    if (num1 < num2) {
      for (let i = num1; i <= num2; i += 1) console.log(i, num2);
    } else if (num1 > num2) {
      for (let i = num1; i >= num2; i -= 1) console.log(i, num2);
    } else {
      console.log(num1, num2)
    }
  }
}

let countToTen = makeCounterLogger(10);
countToTen(5);
countToTen(15);
