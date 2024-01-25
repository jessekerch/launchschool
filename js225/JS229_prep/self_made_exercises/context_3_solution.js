// reimplement this code to use the new class syntax

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
