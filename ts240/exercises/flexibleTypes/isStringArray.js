function isStringArray(arr) {
    return arr.every(function (elem) { return typeof elem === 'string'; });
}
console.log(isStringArray([1, 2, 3]));
console.log(isStringArray(["test", "string"]));
