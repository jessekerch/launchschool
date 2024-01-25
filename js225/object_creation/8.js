function shallowCopy(object) {
  let newObj = Object.create(object);
  let properties = Object.getOwnPropertyNames(object);
  properties.forEach((prop) => {
    newObj[prop] = object[prop];
  });

  return newObj;  
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
console.log(baz.hasOwnProperty('a'));  // false
console.log(baz.hasOwnProperty('b'));  // false
console.log(baz.hasOwnProperty('c'));  // true

// let qux = shallowCopy(baz);
// console.log(qux.a);       // => 1
// qux.c = 5;
// qux.say();                // => c is 3
// console.log(qux.hasOwnProperty('a'));  // false
// console.log(qux.hasOwnProperty('b'));  // false
// console.log(qux.hasOwnProperty('c'));  // true
// baz.say();                // => c is 3
