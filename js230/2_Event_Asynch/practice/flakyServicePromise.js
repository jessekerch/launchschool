function flakyService() {
  return new Promise((resolve, reject) => {
    let valid = !!Math.round(Math.random());
    if (valid) {
      resolve('success!');
    } else {
      reject('failure!');
    }
  })
}

let cb = (msg) => console.log(`Outcome: ${msg}`);
flakyService().then(cb, cb);
  // .catch((msg) => console.log(`Invalid msg: ${msg}`));

