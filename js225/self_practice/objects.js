function makeListTransformer(func) {
  return function(array) {
    return doubleArr = array.map(func);
  }
}

let timesTwo = makeListTransformer(function(number) {
  console.log(number * 2);
});

timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]