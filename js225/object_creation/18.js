function createObject(obj) {
  function Obj() {};
  Obj.prototype = obj;
  return new Obj();
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true
