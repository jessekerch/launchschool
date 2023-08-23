const rlSync = require("readline-sync");

console.log("Enter the first number:");
let firstNum = Number(rlSync.prompt());
console.log("Enter the second number:");
let secondNum = Number(rlSync.prompt());

console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`)

console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`)

console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`)

console.log(`${firstNum} / ${secondNum} = ${Math.floor(firstNum / secondNum)}`)

console.log(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`)

console.log(`${firstNum} ** ${secondNum} = ${Math.pow(firstNum, secondNum)}`)
