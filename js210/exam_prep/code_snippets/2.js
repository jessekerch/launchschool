// let obj1 = { key: "value" };
// let obj2 = obj1;
// let obj3 = obj2;

// obj1.key = "new value";
// obj2 = { key: "another value" };

// console.log(obj1.key, obj2.key, obj3.key);

let obj1 = { key: "value" };
let obj2 = obj1;

obj1.key = "new value";
console.log(obj1.key); // new value
console.log(obj2.key); // new value

// let num1 = 5;
// let num2 = num1;

// num1 = 6;
// console.log(num1); // 6
// console.log(num2); // 5
