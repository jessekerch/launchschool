function isNumber(value) {
    return typeof value === "number";
}
// // example 1
var x = "Launch School";
if (isNumber(x)) {
    var y = x;
    console.log(y);
}
else {
    console.log("".concat(x, " is not a number"));
}
// // example 2
// let x: any = "Launch School";
// if (isNumber(x)) {
//   const y = x;
//   console.log(y);
// } else {
//   console.log(`${x} is not a number`);
// }
