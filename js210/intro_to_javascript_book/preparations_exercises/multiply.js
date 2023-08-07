function multiply(a, b) {
  return a * b;
}

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}

let first = getNumber('Enter the first number: ');
let second = getNumber('Enter the second number: ');

console.log(`${first} * ${second} = ${multiply(first, second)}`)
