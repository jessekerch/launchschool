const rlSync = require("readline-sync");

console.log("Please enter a phrase: ");
let phrase = rlSync.prompt();
let phraseAlpha = phrase.replace(/[^A-Za-z]/g, '');

let length = phraseAlpha.length;

console.log(`There are ${length} letters in "${phrase}".`)


// Please enter a phrase: walk
// // console output
// There are 4 characters in "walk".

// Please enter a phrase: walk, don't run
// // console output
// There are 15 characters in "walk, don't run".