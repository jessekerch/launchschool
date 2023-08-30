const rlSync = require('readline-sync')

function calculate(integer, operator) {
  if (operator === 's') {
    let result = 0;
    for (let num = 1; num <= integer; num += 1) {
      result += num;
    }
    console.log(`The sum of integers between 1 and ${integer} is ${result}`);
  } else if (operator === 'p') {
    let result = 1;
    for (let num = 1; num <= integer; num += 1) {
      result *= num;
    }
    console.log(`The product of integers between 1 and ${integer} is ${result}`);
  }

}

let integer = rlSync.question('Please enter an integer greater than 0: ');
let operator = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

calculate(parseInt(integer, 10), operator);


// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.