const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function dateSuffix(date) {
  let digit;
  if (date.length === 1 ) {
    digit = date[0];
  } else if (date[0] !== '1') {
    digit = date[1];
  }

  let suffix = 'th';
  if (digit === 1) {
    suffix = 'st';
  } else if (digit === 2) {
    suffix = 'nd';
  } else if (digit === 3) {
    suffix = 'rd';
  }
  return suffix;
}

function formattedMonth(date) {
  let month = date.getMonth();
  return months[month];
}

function formattedDay(date) {
  let day = date.getDay();
  return daysOfWeek[day];
}

function formattedDate(today) {
  let month = formattedMonth(today);
  let day = formattedDay(today);
  let date = String(today.getDate());
  let suffix = dateSuffix(date);

  console.log(`Today is ${day}, ${month} the ${date}${suffix}.`);
}

let today = new Date();
// formattedDate(today);

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);
