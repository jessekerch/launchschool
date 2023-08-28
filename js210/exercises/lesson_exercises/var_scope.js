// function logValue() {
//   var string = 'foo';
// }

// logValue();

// console.log(string);

// {
//   var insideTheBlock = 'hello';
// }

// console.log(insideTheBlock);  // logs 'hello'

if ('yes') {
  // this is a block
  var string = 'foo';
  console.log('yes');
} else {
  // so is this
  console.log('nope');
}

console.log(string);
