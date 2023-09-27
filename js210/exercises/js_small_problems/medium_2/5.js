function digitsRepeat(num) {
  const arr = String(num).split('');
  if (arr.length < 2) return false;
  while (arr.length > 0) {
    let current = arr.pop();
    if (arr.some(val => val === current)) return true;
  }
  return false;
}

function isFeaturedNum(num) {
  if (num % 2 === 0) return false;
  if (num % 7 !== 0) return false;
  if (digitsRepeat(num)) return false;
  return true;
}

function featured(num) {
  const MAX_NUM = 9876543201;
  let next = num + 1;
  while (next <= MAX_NUM) {
    if (isFeaturedNum(next)) return next;
    next += 1;
  }
  return 'There is no possible number that fulfills those requirements.';
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."