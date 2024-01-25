let number = 0;

function add(operand) {
    number += operand;
    console.log(number);
}

function subtract(operand) {
  number -= operand;
  console.log(number);
}

add(1);
// 1
add(42);
// 43
subtract(39);
// 4
add(6);
// 10