const rlSync = require('readline-sync')

function calculateTip(bill, percent) {
  percent /= 100
  let tip = bill * percent
  let total = bill + tip;

  console.log(`The tip is $${(tip).toFixed(2)}`);
  console.log(`The total is $${(total).toFixed(2)}`);
}

let bill = rlSync.question('What is the bill? ');
let percent = rlSync.question('What is the tip percentage? ');

calculateTip(parseFloat(bill), parseFloat(percent));


// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00
