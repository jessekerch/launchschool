// Create a function newStack, that, when called, returns a stack object with three methods: push, pop, and printStack. push takes a value and appends it to the stack. pop removes and returns the last element from the stack. printStack logs each remaining element of the stack on its own line, starting with the item that was least recently added to the stack and ending with the most recently added item that is still on the stack.

// Internally, use an array to implement the stack. Make sure that the array is not accessible from outside the methods.

function newStack() {
  let stack = [];
  return {
    push(val) {
      stack.push(val);
      return stack;
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      if (stack.length === 0) {
        console.log('The stack is empty');
      } else {
        stack.forEach((val) => console.log(val));
      }
    },
  };
}

let myStack = newStack();
myStack.printStack();
myStack.push('one');
myStack.printStack();
myStack.push('two');
myStack.printStack();
myStack.pop();
myStack.printStack();
