interface Person {
  name: string;
  age: number;
}

const person: Person = { name: "John", age: 30 };
const newPerson: Person = { age: 31, ...person };
// 'age' is specified more than once, so this usage will be overwritten.
// This spread always overwrites this property.
console.log(newPerson);
