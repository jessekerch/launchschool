let bar = {};
let baz = Object.create(bar);
let foo = Object.create(baz);

console.log(bar.isPrototypeOf(foo));             // true
console.log(Object.getPrototypeOf(foo) === bar); // false
console.log(Object.getPrototypeOf(foo) === baz); // false
