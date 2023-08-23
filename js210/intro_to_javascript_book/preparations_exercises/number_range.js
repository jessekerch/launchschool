function numberRange(num) {
  if (num < 0) {
    console.log(`${num} is less than 0`);
  } else if ((num >= 0) && (num <= 50)) {
    console.log(`${num} is between 0 and 50`)
  } else if ((num > 50) && (num <= 100)) {
    console.log(`${num} is between 51 and 100`)
  } else if (num > 100) {
    console.log(`${num} is greater than 100`)
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

// 25 is between 0 and 50
// 75 is between 51 and 100
// 125 is greater than 100
// -25 is less than 0
// false, true, 3, false, 3, 3, undefined, null
 