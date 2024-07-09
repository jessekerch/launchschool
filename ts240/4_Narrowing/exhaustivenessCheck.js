function describeAnimal(animal) {
    // implementation for function
    switch (animal.kind) {
        case "elephant":
            return "An elephant weighs ".concat(animal.weight, "kg.");
            break;
        case "tiger":
            return "A tiger can run ".concat(animal.speed, " km/hr.");
            break;
        case "peacock":
            return "A peacock has ".concat(animal.featherLength, " cm long feathers.");
            break;
        default:
            // Exhaustiveness check - this block should be unreachable
            var _exhaustiveCheck = animal;
            throw new Error("Unknown animal: ".concat(JSON.stringify(_exhaustiveCheck)));
            break;
    }
}
console.log(describeAnimal({
    kind: "elephant",
    weight: 5000,
}));
console.log(describeAnimal({
    kind: "tiger",
    speed: 51,
}));
console.log(describeAnimal({
    kind: "peacock",
    featherLength: 120,
}));
console.log(describeAnimal({
    kind: "giraffe",
    neckLength: 9,
}));
