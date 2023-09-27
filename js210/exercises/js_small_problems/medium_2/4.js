function fridayThe13ths(year) {
  let scaryDays = 0;

  for (let month = 0; month <= 12; month += 1) {
    let thirteenth = new Date(year, month, 13);
    if (thirteenth.getDay() === 5) scaryDays += 1;
  }

  return scaryDays;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2