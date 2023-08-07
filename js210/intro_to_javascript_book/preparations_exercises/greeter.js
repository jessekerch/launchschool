function getName(firstOrLast) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(`What\'s your ${firstOrLast} name?\n`);
  return name;
}

let firstName = getName('first');
let lastName = getName('last');

console.log(`Hello, ${firstName} ${lastName}!`);
