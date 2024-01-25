// this code isn't producing the expected result, explain why
// then, provide 4 different possible ways to resolve the issue 

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
    receivers.forEach(function(player) {
      lastPlay = players.indexOf(player) === players.length - 1;
      passYards = lastPlay ? toEndzone : randomPassYards();
      toEndzone -= passYards;
      console.log(`  ${this.name} to ${player.name} for ${passYards} yards`)
      if (toEndzone === 0) console.log("Touchdown!")
    }.call(this));
  }
}

let ham = new Player('CJ Ham');
let kirk = new Quarterback('Kirk Cousins');
let kj = new Receiver('KJ Osbourne');
let tj = new Receiver('TJ Hockenson');
let jjet = new Receiver('Justin Jefferson');

kirk.huddle();
