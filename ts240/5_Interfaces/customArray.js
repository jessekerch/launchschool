var customArray = ["apple", 42, "banana"];
function processCustomArray(arr) {
    if (Array.isArray(arr)) {
        return arr.filter(function (elem) { return typeof elem === "string"; })
            .map(function (elem) { return elem.toUpperCase(); });
    }
}
console.log(processCustomArray(customArray));
