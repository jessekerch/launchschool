rlSync = require('readline-sync');
const numberPlaceList = ['1st', '2nd', '3rd', '4th', '5th', 'last'];

function getNumber(place) {
  let number = rlSync.question(`Enter the ${place} number: `);
  return number;
}

function numberCheck(numArray) {
  lastNum = numArray.pop();
  if (numArray.indexOf(lastNum) === -1) {
    return `The number ${lastNum} does not appear in ${numArray}`;
  } else {
    return `The number ${lastNum} appears in [${numArray.join(', ')}]`;
  }
}

function sixthAppears() {
  let numberList = [];
  numberPlaceList.forEach(place => {
    numberList.push(getNumber(place));
  });

  console.log(numberCheck(numberList));
}

sixthAppears();

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in [25, 15, 20, 17, 23].