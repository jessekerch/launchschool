function logUnknown(input) {
    if (typeof input === 'string') {
        console.log("Here's your string: ".concat(input));
    }
}
logUnknown('hello world');
logUnknown(42);
