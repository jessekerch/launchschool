class Person {
  name: string;
  age: number;

  constructor(nameArg: string, ageArg: number) {
    this.name = nameArg;
    this.age = ageArg;
  }

  describe(): string {
    return `${this.name} is ${this.age} years old`
  }
}

const person = new Person('Foxy', 5);
console.log(person.describe());
