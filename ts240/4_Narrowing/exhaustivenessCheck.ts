type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
};

type Peacock = {
  kind: "peacock";
  featherLength: number;
};

type Giraffe = {
  kind: "giraffe";
  neckLength: number;
};

type Animal = Elephant | Tiger | Peacock | Giraffe;

function describeAnimal(animal: Animal): string {
  // implementation for function
  switch (animal.kind) {
    case "elephant":
      return `An elephant weighs ${animal.weight}kg.`;
      break;
  
    case "tiger":
      return `A tiger can run ${animal.speed} km/hr.`;
      break;
    
    case "peacock":
      return `A peacock has ${animal.featherLength} cm long feathers.`;
      break;
      
    default:
      // Exhaustiveness check - this block should be unreachable
      const _exhaustiveCheck: never = animal;
      throw new Error(`Unknown animal: ${JSON.stringify(_exhaustiveCheck)}`);
      break;
  }
}

console.log(describeAnimal(
  {
    kind: "elephant",
    weight: 5000,
  }));

  console.log(describeAnimal(
    {
      kind: "tiger",
      speed: 51,
    }));
  
  console.log(describeAnimal(
    {
      kind: "peacock",
      featherLength: 120,
    }));
      
  console.log(describeAnimal(
    {
      kind: "giraffe",
      neckLength: 9,
    }));
        
  