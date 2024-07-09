type Dog = {
  kind: "dog";
  name: string;
  age: number;
}

type Bird = {
  kind: "bird";
  name: string;
  wingspan: number;
}

type Animal = Dog | Bird;

function describeAnimal(animal: Animal): string {
  // implementation for function
  switch (animal.kind) {
    case "dog":
      return `${animal.name} is a ${animal.age} year(s) old dog.`;
      break;
  
    case "bird":
      return `${animal.name} is a bird with a ${animal.wingspan}cm wingspan.`;

      break;
    
    default:
      return "argument is neither dog nor bird";
      break;
  }
}

console.log(describeAnimal(
  {
    kind: "bird",
    name: "Peetie",
    wingspan: 23,
  }));

  console.log(describeAnimal(
    {
      kind: "dog",
      name: "Bartholomew",
      age: 23,
    }));
  
  