// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(timeStr) {
//   const timeComponents = timeStr.split(':');
//   const hours = parseInt(timeComponents[0], 10);
//   const minutes = parseInt(timeComponents[1], 10);

//   return hours * MINUTES_PER_HOUR + minutes;
// }

// function beforeMidnight(timeStr) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }

//   return deltaMinutes;
// }

// return a number between 0 and 1439

function afterMidnight(timeString) {
  let timeArray = timeString.split(':');
  let hours = Number(timeArray[0]);
  let minutes = Number(timeArray[1]);
  let midnight = new Date(2023, 0, 1, 0, 0);
  let setTime = new Date(2023, 0, 1);
  setTime.setUTCHours(hours);
  setTime.setUTCMinutes(minutes);

  let difference = midnight.getTime();

  console.log(difference);
}

function beforeMidnight(timeString) {
  let timeArray = timeString.split(':');
  let hours = Number(timeArray[0]);
  let minutes = Number(timeArray[1]);
  let totalMinutes = hours * 60 + minutes;

  return totalMinutes;
}


// afterMidnight('00:00');       // 0
// beforeMidnight('00:00');      // 0
afterMidnight('12:34');       // 754
// beforeMidnight('12:34');      // 686
