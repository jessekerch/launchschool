let arr = [1, 2, 3, 2, 1, 6];
arr.sort();
console.log(arr);

let colors = [
  { fruit: 'apple', color: 'red'},
  { fruit: 'banana', color: 'yellow'},
  { fruit: 'apple', color: 'red'},
  { fruit: 'apple', color: 'red'},
  { fruit: 'banana', color: 'black'},
  { fruit: 'banana'},
  { fruit: 'apple', color: 'green'},
  { fruit: 'apple'},
  { fruit: 'banana', color: 'green'}
];

// [
//   { fruit: 'banana', color: 'black' },
//   { fruit: 'apple', color: 'green' },
//   { fruit: 'banana', color: 'green' },
//   { fruit: 'apple', color: 'red' },
//   { fruit: 'apple', color: 'red' },
//   { fruit: 'apple', color: 'red' },
//   { fruit: 'banana', color: 'yellow' },
//   { fruit: 'apple' },
//   { fruit: 'banana' }
// ]

colors.sort((a, b) => {
  if (a.color < b.color) {
    return -1;
  } else if (a.color > b.color) {
    return 1;
  } else {
    return 0;
  }
});

colors.sort((a, b) => {
  if ((!a.color && !b.color) && (a.fruit < b.fruit)) {
    return -1;
  } else if ((!a.color && !b.color) && (a.fruit > b.fruit)) {
    return 1;
  } else {
    return 0;
  }
});

console.log(colors);
