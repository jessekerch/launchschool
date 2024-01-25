let myFunc = function () {};

console.log(myFunc.prototype);
console.log(myFunc.__proto__ === Function.prototype);
console.log(Object.getPrototypeOf(myFunc) === Function.prototype);
console.log(myFunc.constructor === Function);

myFunc.say = function () {console.log('Just saying!')};
myFunc.say();

console.log(myFunc.prototype);
