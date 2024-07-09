function describeAnimal(animal) {
    if (animal.species === "dog") {
        return "".concat(animal.name, " is a ").concat(animal.age, " year(s) old dog.");
    }
    else if (animal.species === "bird") {
        return "".concat(animal.name, " is a bird with a ").concat(animal.wingspan, " cm wingspan.");
    }
    else {
        // We should never reach this point because of the discriminated union
        throw new Error("Unknown animal species");
    }
}
// type Dog = {
//   kind: "dog";
//   name: string;
//   age: number;
// }
// type Bird = {
//   kind: "bird";
//   name: string;
//   wingspan: number;
// }
// type Animal = Dog | Bird;
// function describeAnimal(animal: Animal): string {
//   // implementation for function
//   switch (animal.kind) {
//     case "dog":
//       return `${animal.name} is a ${animal.age} year(s) old dog.`;
//       break;
//     case "bird":
//       return `${animal.name} is a bird with a ${animal.wingspan}cm wingspan.`;
//       break;
//     default:
//       return "argument is neither dog nor bird";
//       break;
//   }
// }
console.log(describeAnimal({
    species: "bird",
    name: "Peetie",
    wingspan: 23,
}));
console.log(describeAnimal({
    species: "dog",
    name: "Bartholomew",
    age: 23,
}));
