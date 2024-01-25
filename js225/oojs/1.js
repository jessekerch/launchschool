let obj = {
  monkey: 'yep',
}

// console.log(typeof obj === 'object');
// console.log(typeof obj === 'function');

// console.log(obj.hasOwnProperty('monkey'));
// console.log(obj.hasOwnProperty('elephant'));

// console.log(typeof Object);

// console.log(obj.__proto__ === Object.prototype);
// console.log(obj.getPrototypeOf(obj) === Object.prototype);

console.log(obj.constructor === Object); // true
console.log(obj.prototype); // undefined

// An object's prototype is said to be the next link up the chain, the object that the current object inherits from.
// In other words, what the current object's __proto__ ([[Prototype]]) property references.

// But prototype is ALSO the name for the specific property on the object form of Functions.
