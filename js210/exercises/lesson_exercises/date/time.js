function formatTime(date) {
  let hours = String(date.getHours());
  hours = hours.length < 2 ? '0' + hours : hours;
  let minutes = String(date.getMinutes(10));
  minutes = minutes.length < 2 ? '0' + minutes : minutes; 
  let timeString = `${hours}:${minutes}`;

  return timeString;
}


let today = new Date();
console.log(formatTime(today));

let anotherDay = new Date(2013, 2, 1, 9, 59);
console.log(formatTime(anotherDay));


