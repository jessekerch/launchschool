const func = function () {};
func.call();

console.log(Object.getPrototypeOf(func) === Function.prototype);
console.log(func.constructor === Function);
console.log(func.prototype);
