let rlSync = require('readline-sync');

let name = rlSync.question("What's your name? ");
if (name.endsWith('!')) {
  name = name.slice(0, -1);
  console.log(`Hello ${name}. WHY ARE WE SCREAMING?`.toUpperCase());
} else {
  console.log(`Hello ${name}.`);
}

// What is your name? Bob
// Hello Bob.                                   // console output

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?             // console output
