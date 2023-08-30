function century(year) {
  let cent = Math.floor((year - 1) / 100) + 1;
  let ending = 'th';
  if (cent % 10 === 1) ending = 'st';
  if (cent % 10 === 2) ending = 'nd';
  if (cent % 10 === 3) ending = 'rd';
  if ([11, 12, 13].includes(cent % 100)) ending = 'th';

  return cent + ending;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"