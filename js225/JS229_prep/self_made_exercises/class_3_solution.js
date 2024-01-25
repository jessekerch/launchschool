// because we pass the anonymous function on line 57 as an argument to forEach
// when it is invoked, `this` refers to the global object which is undefined in strict mode
// an error is raised because we cannot read properties of undefined (i.e. this.name)
// QUESTION: when not in strict mode, shouldn't this resolve to the global object and then global.name will return undefined rather than raising an error??

//solutions:
// 1: declare local variable self in the lexical scope to store this
//   and then reference self instead of this in the inner function
// 2: bind the anonymous function with the surrounding context
//   forEach(function(player) {...}.bind(this));
// 3: use the optional thisArg argument which forEach accepts as
//   a value to use as `this` with a callback function
//   i.e. forEach(function(player) {...}.bind(this));
// 4: use an arrow function as the argument instead since the value of `this` in arrow functions
//   is determined lexically based on the current value of this where the arrow function is defined
//   i.e. forEach((player) => {...});


"use strict";

let players = [];
let receivers = [];
let randomPassYards = function() {
  return Math.floor(Math.random() * 45);
}

class Player {
  constructor(name) {
    this.name = name;
    players.push(this);
  }

  block() {
    console.log(`${this.name} blocking!`)
  }

  tackle() {
    console.log(`${this.name} tackling!`)
  }
}  

class Receiver extends Player {
  constructor(name) {
    super(name);
    receivers.push(this);
  }

  receive() {
    console.log(`${this.name} catching passes!`)
  }
}

class Quarterback extends Player {
  constructor(name) {
    super(name);
  }

  pass() {
    console.log(`${this.name} passing the ball!`)
  }

  tackle() {
    console.log(`${this.name} is trying to tackle but isn't very good at it!`)
  }

  huddle() {
    let toEndzone = 100;
    let passYards;
    let lastPlay;
    
    console.log("OK here's how we win:")
    receivers.forEach((player) => {
      lastPlay = players.indexOf(player) === players.length - 1;
      passYards = lastPlay ? toEndzone : randomPassYards();
      toEndzone -= passYards;
      console.log(`  ${this.name} to ${player.name} for ${passYards} yards`)
      if (toEndzone === 0) console.log("Touchdown!")
    });
  }
}

let ham = new Player('CJ Ham');
let kirk = new Quarterback('Kirk Cousins');
let kj = new Receiver('KJ Osbourne');
let tj = new Receiver('TJ Hockenson');
let jjet = new Receiver('Justin Jefferson');

kirk.huddle();
