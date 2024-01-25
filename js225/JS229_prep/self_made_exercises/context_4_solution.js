// add a Quarterback class which can delegate any of the methods defined so far
// add a unique pass method which logs "... passing the ball!" to the console
// when tackle is called on an instance of Quarterback, output "... is trying to tackle but isn't very good at it!"

class Player {
  constructor(name) {
    this.name = name;
  }

  block() {
    console.log(`${this.name} blocking!`)
  }

  tackle() {
    console.log(`${this.name} tackling!`)
  }
}  

let ham = new Player('CJ Ham');
ham.block();
ham.tackle();

class Receiver extends Player {
  constructor(name) {
    super(name);
  }

  receive() {
    console.log(`${this.name} catching passes!`)
  }
}

let jjet = new Receiver('Justin Jefferson');
jjet.receive();
jjet.block();

class Quarterback extends Receiver {
  constructor(name) {
    super(name);
  }

  pass() {
    console.log(`${this.name} passing the ball!`)
  }

  tackle() {
    console.log(`${this.name} is trying to tackle but isn't very good at it!`)
  }
}

let kirk = new Quarterback('Kirk Cousins');
kirk.pass();
kirk.tackle();
