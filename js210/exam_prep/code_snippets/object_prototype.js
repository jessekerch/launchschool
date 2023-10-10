let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';
// console.log(studentBob.name); // => 'Bob'

// console.log(studentBob); // => { year: 'Senior' };
// console.log(bob); // => { name: 'Bob', age: 22 };

for (let prop in studentBob) {
  if (studentBob.hasOwnProperty(prop)) console.log(prop);
}

// Object.keys(studentBob).forEach((key) => console.log(key));

