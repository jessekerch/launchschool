function processDataPromise(numbers, callback) {
  return new Promise((resolve) => {
      setTimeout(() => {
      resolve(numbers.map(callback));
    }, 1000);
  });
}

let numbers = [1, 2, 3];
let cb = (number) => number * 2;
processDataPromise(numbers, cb).then((result) => console.log(result));
