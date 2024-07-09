function safeGet(arr, idx) {
    if (idx >= 0 && idx < arr.length) {
        return arr[idx];
    }
    return undefined;
}
var names = ["John", "Jane"];
var first_name = safeGet(names, 2); // Should return undefined
console.log(first_name);
var numbers = [1, 2, 3];
var number = safeGet(numbers, 1); // Should return 2
console.log(number);
