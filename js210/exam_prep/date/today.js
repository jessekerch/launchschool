let today = new Date();
let nextWeek = new Date(today.getTime());

console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(today.getDate() + 7);

console.log(today.toDateString(), nextWeek.toDateString());

// // let today = new Date();
// // console.log(today);

// const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// let today = new Date();
// let thisDayIdx = today.getDay();
// let thisDay = daysOfWeek[thisDayIdx];
// console.log(today.toDateString());