let imFeeling = ["I'm hungry", "I'm thirsty"];
console.log(imFeeling[0]);

// function pushTwo(array) {
//   array.push(2);
// }

// let arr = [1, 2, 3, 4];
// let newArr = arr;

// console.log(newArr);
// pushTwo(newArr);

// console.log(newArr);
// console.log(arr);

// let arr = [1, 2, 3, 4];
// for (let idx = 0; idx < arr.length; idx += 1) {
//   console.log(arr[idx]);
//   if (arr[idx] === 3) {
//     console.log('Found 3!');
//     break;
//   }
// }

// let num = 9.9;
// let num2 = 10;
// console.log((num + num2) / 2 );

// let arr = [,,,];
// console.log(arr.length);

// let arr = [1, 2, 3];
// arr[3] = 4;
// arr[-11] = 'wow!';
// arr['hello'] = 'bye';
// console.log(arr[3]); // 4
// console.log(arr['hello']); // bye
// console.log(arr[-11]); // wow!
// console.log(arr); // [ 1, 2, 3, 4, '-11': 'wow!', hello: 'bye' ]
// let arr2 = [1, 2, 3, 4, '-11': 'wow!', hello: 'bye'];
// SyntaxError: Unexpected token ':'
// Note the type coercion

// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// myArray.forEach((arr) => {
//   arr.forEach((num) => {
//     if (num % 2 === 0) console.log(num);
//   });
// });

// let myArr = ['a', 'b', 'c'];
// myArr[-1] = 'd';
// console.log(myArr);
// console.log(myArr.length);

// myArr.length = 4;
// console.log(myArr);
// console.log(myArr.length);




// function foo(bar) {
//   console.log(bar());
// }

// foo(function() { return 'Welcome' });
// foo(function() { return 3.1415 });
// foo(function() { return [1, 2, 3] });

// let myObj = { a: 1, b: 2, c: 3, d: 4};
// let myVals = Object.values(myObj);
// myVals['e'] = 5;
// console.log(myVals);
// console.log(myVals.find((val) => val > 2));

// let myArray = [3, 1, 7, 2];

// function myFunc(arr) {
//   console.log(arr.sort((a, b) => a - b));
// }
// console.log(myArray);
// myFunc(myArray);
// console.log(myArray);

// let num = 4936;
// let str = (4936).toString();
// console.log(str);

// let num = 4936;
// let thousands = Math.floor(num / 1000);
// num -= thousands * 1000;
// console.log(thousands);
// let hundreds = Math.floor(num / 100);
// console.log(hundreds);
// num -= hundreds * 100;
// let tens = Math.floor(num / 10);
// console.log(tens);
// num -= tens * 10;
// console.log(num);