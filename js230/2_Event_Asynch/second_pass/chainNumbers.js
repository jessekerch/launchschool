function calculate(num) {
  return new Promise((resolve) => {
    resolve(num);
  })
}

calculate(5)
  .then((result) => {
    let nextNum = result * 2;
    return nextNum;
  })
  .then((result) => {
    let nextNum = result + 5;
    return nextNum;
  })
  .then(console.log);