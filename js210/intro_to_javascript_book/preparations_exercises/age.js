let rlSync = require('readline-sync');
let age = rlSync.question('How old are you?\n');
age = parseInt(age);

console.log(`You are ${age} years old.`);

for (let years = 10; years < 50; years += 10) {
  console.log(`In ${years} years you will be ${age + years} years old.`);
}
