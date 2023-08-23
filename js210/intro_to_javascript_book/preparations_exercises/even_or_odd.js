function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('The number is not an integer!');
    return;
  }

  if (num % 2 === 0) {
    return 'even';
  }
  else {
    return 'odd';
  }
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(5));
console.log(evenOrOdd(4));
console.log(evenOrOdd('2'));
console.log(evenOrOdd('5'));
console.log(evenOrOdd(4.1234));

