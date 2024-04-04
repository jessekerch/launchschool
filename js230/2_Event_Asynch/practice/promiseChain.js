function chainPromise(num) {
  return new Promise((resolve) => {
    resolve(num);
  });
}

let doubleAddFive = (num) => num * 2 + 5;
console.log(Promise.resolve(chainPromise(7)));
  // .then((num) => num * 2)
  // .then((num) => num + 5)
  // .then((result) => console.log(result));

// Promise.resolve(7)
//   .then((num) => num * 2)
//   .then((num) => num + 5)
//   .then((result) => console.log(result));
