function pop(values) {
  let lastIndex = values.length - 1;
  lastValue = values[lastIndex];
  values.splice(lastIndex);
  
  return lastValue;
}

function push(values, ...args) {
  args.forEach
  let idx = values.length;
  args.forEach(element => {
    values[idx] = element;
    idx += 1;
  });

  return values.length;
}

// pop
const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0