function makeMultipleLister(mult) {
  return function() {
    for (let num = mult; num <= 100; num += mult) {
      console.log(num);
    }
  }
}

let thirteener = makeMultipleLister(13);
thirteener();
// 13
// 26
// 39
// 52
// 65
// 78
// 91