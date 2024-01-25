let foo = {
  a: 1,
};

Object.prototype.begetObject = function() {
  function Obj() {};
  Obj.prototype = this;
  return new Obj();
};

// foo.begetObject = function() {
//   let obj = this;
//   function Obj() {};
//   Obj.prototype = obj;
//   return new Obj();
// };

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true
