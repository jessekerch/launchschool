const ELEMENTS = ['Smith', 'Jones', 'Cook'];

function squish(array) {
  let string = '';
  for (let idx = 0; idx < array.length; idx += 1) {
    string += array[idx];
  }
  return string;
}

console.log(squish(ELEMENTS));
