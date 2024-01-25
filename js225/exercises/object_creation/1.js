// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

Object.prototype.ancestors = function() {
  let obj = Object.getPrototypeOf(this);
  if (Object.hasOwnProperty.call(obj, 'name')) {
    return [obj.name].concat(obj.ancestors());
  };

  return ['Object.prototype'];
}

// console.log(Object.getPrototypeOf(qux) === baz);
// console.log(Object.getPrototypeOf(qux).name);

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']
