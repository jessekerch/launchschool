function combine(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        throw new Error('Invalid input types: both inputs must be strings or both inputs must be numbers.');
    }
}
console.log(combine("Hello", "World"));
console.log(combine(1, 2));
