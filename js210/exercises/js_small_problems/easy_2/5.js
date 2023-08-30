let rlSync = require('readline-sync');

function madLib() {
  let noun = rlSync.question('Enter a noun: ');
  let verb = rlSync.question('Enter a verb: ');
  let adjective = rlSync.question('Enter an adjective: ');
  let adverb = rlSync.question('Enter an adverb: ');

  let sentence = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;

  console.log(sentence);
}

madLib();

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!