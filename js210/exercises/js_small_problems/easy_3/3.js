const rlSync = require('readline-sync');

let currentAge = rlSync.question('How old are you now? ');
let retireAge = rlSync.question('When do you want to retire? ');
let yearsToGo = retireAge - currentAge;
let thisYear = new Date().getUTCFullYear();
let retireYear = thisYear + yearsToGo;

console.log(`It's ${thisYear}. You'll retire in ${retireYear}`);
console.log(`You only have ${yearsToGo} years more to work!`);


