function shallowCopy(object) {
  let newObj = Object.create(Object.getPrototypeOf(object));
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
console.log(bar.hasOwnProperty('a'));
console.log(foo.hasOwnProperty('b'));

bar.c = 3;
console.log(bar.hasOwnProperty('c'));
console.log(foo.hasOwnProperty('c'));
