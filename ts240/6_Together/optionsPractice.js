function formatName(options) {
    var _a, _b, _c;
    // Your implementation here
    return "".concat((_a = options.title) !== null && _a !== void 0 ? _a : '', " ").concat((_b = options.firstName) !== null && _b !== void 0 ? _b : 'John', " ").concat((_c = options.lastName) !== null && _c !== void 0 ? _c : 'Doe');
}
var formattedName = formatName({
    firstName: "Jane",
    lastName: "Smith",
    title: "Dr.",
});
console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe
