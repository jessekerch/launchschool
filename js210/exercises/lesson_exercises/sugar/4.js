function foo(numbers) {
  let one = numbers[0];
  let two = numbers[1];
  let three = numbers[2];
  return [
    three,
    5,
    one,
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let bar = result[0];
let qux = result[1];
let baz = result[2];

