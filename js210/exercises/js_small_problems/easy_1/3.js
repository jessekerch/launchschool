const SQ_FT_PER_SQ_METER = 10.7639
const rlSync = require('readline-sync')

function roomArea(length, width) {
  let area_m = parseInt(length, 10) * parseInt(width, 10);
  let area_ft = Math.floor(area_m * SQ_FT_PER_SQ_METER);

  console.log(`The area of the room is ${area_m} square meters (approx ${area_ft} square feet)`);
}

let length = rlSync.question('Enter the length of the room in meters: ');
let width = rlSync.question('Enter the width of the room in meters: ');

roomArea(length, width);
