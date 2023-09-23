/* eslint-disable max-lines-per-function */
function minilang(commands) {
  let register = 0;
  let stack = [];

  const commandArray = commands.split(' ');
  while (commandArray.length > 0) {
    let command = commandArray.shift();
    
    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= Number(stack.pop());
        break;
      case 'MULT':
        register *= Number(stack.pop());
        break;
      case 'DIV':
        register = Number(stack.pop());
        break;
      case 'REMAINDER':
        register %= Number(stack.pop());
        break;
      case 'POP':
        register = parseInt(stack.pop(), 10);
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = parseInt(command, 10);
        break;
    }
  }
  return register;
}

// minilang('PRINT');
// 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // // 5
// // // 3
// // // 8

// minilang('5 PUSH POP PRINT');
// // // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // // 8

// minilang('6 PUSH');
// // // (nothing is printed because the `program` argument has no `PRINT` commands)
