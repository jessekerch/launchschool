function greet(greeting, name) {
  let capitalGreet = greeting[0].toUpperCase() + greeting.slice(1);
  let message = capitalGreet + ', ' + name + '!';
  console.log(message);
}

function partial(primary, greeting) {
  return function(name) {
    return primary(greeting, name);
  }
}

let sayHello = partial(greet, 'hello');
let sayHi = partial(greet, 'hi');

sayHello('Brandon');
// Hello, Brandon!
sayHi('Sarah');
// Hi, Sarah!