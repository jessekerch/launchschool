// function doubler(number, caller) {
//   console.log(`This function was called by ${caller}.`);
//   return number + number;

function makeDoubler(caller) {
  return function (number) {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  }
}

// doubler(5, 'Victor');                   // returns 10
// // logs:
// // This function was called by Victor.

const doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.

// Write a makeDoubler function that takes a caller name as an argument,
// and returns a function that has the same behavior as doubler, but with a preset caller.