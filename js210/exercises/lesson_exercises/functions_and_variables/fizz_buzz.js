let fizzbuzz = () => {
  for (let num = 1; num <= 100; num += 1) {
    let message = '';
    message += num % 3 === 0 ? 'Fizz' : '';
    message += num % 5 === 0 ? 'Buzz' : '';
    console.log(message || num);
  }
}

// function fizzbuzz() {
//   for (let num = 1; num <= 100; num += 1)
//   if (num % 3 === 0 && num % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (num % 5 === 0) {
//     console.log('Buzz');
//   } else if (num % 3 === 0) {
//     console.log('Fizz');
//   } else {
//     console.log(num);
//   }
// }

fizzbuzz();

// console output
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// … rest of output omitted for brevity