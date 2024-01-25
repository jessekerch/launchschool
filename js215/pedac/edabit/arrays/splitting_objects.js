// https://edabit.com/challenge/FrFkH5BPnqz4pYpqD

/*

You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.

    The input array will never be empty.
    Objects will always have a name and quantity over 0.
    The returned object should have each fruit in the same order as the original.

    input: array, containing one or more objects
    return: array, containing objects

    rules: 
    do not mutate input array
    input array contains object(s)
    each object will have a name and quantity (quantity > 0)
    return array objects in same order as input array objects
    return object quantity is always 1

    data:
    input: arrays containing objects
    return: arrays containing objects

    example:
    [object] => iterate over the elements of the array
    each element
      if value of the quantity > 1
        split and add multiple to new array
      else 
        add single to new array

    return new array

    algo:
      initializse a splitFruit variable to empty array;
      iterate over the elements of the bunches input array
      initialize a new repeat variable to quantity of the current fruit
        while repeat variable > 0 repeat
          add a new object with element name and quantity 1 to splitFruit
          subtract one from repeat variable

    return splitFruit

    [{ name: "grapes", quantity: 1 }, { name: "grapes", quantity: 1 }]
    [{ name: "grapes", quantity: 2 }]
    repeat = 0

*/

function splitBunches(fruitArr) {
  let splitFruit = [];
  fruitArr.forEach((obj) => {
    let count = obj.quantity;
    while (count > 0) {
      splitFruit.push({ name: obj.name, quantity: 1});
      count -= 1;
    }
  })
  
  return splitFruit;
}

console.log(splitBunches([
  { name: "grapes", quantity: 2 }
])) 
// ➞ [
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 }
// ]


console.log(splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]))
// ➞ [
//   { name: "currants", quantity: 1},
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]

