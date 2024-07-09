function processInput(input) {
    // Your implementation here
    if (typeof input === 'string') {
        console.log(input.toUpperCase());
    }
    else if (typeof input === 'number') {
        console.log(input.toFixed(2));
    }
    else if (Array.isArray(input)) {
        console.log(input.length);
    }
    else {
        var _exhaustiveCheck = input;
        throw new Error(JSON.stringify(_exhaustiveCheck));
    }
}
processInput("hello"); // Outputs: HELLO
processInput(42); // Outputs: 42.00
processInput([1, 2, 3]); // Outputs: 3
