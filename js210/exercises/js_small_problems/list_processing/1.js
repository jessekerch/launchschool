function sum(num) {
  return String(num).split('').reduce((total, value) => total + parseInt(value, 10), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45