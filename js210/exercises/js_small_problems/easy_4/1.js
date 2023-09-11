function dms(floatAngle) {
  let degrees = Math.floor(floatAngle);
  floatAngle -= degrees;

  let minutes = String(Math.floor(floatAngle * 60)).padStart(2, '0');
  floatAngle -= (minutes / 60);

  let seconds = String(Math.round(floatAngle * 3600)).padStart(2, '0');

  return `${degrees}˚${minutes}'${seconds}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"