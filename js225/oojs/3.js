const arr = ['a', 'b'];
console.log(arr.join('')); // 'ab'

console.log(Object.getPrototypeOf(arr) === Array.prototype);
console.log(arr.constructor === Array);

console.log(typeof arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr.prototype);
