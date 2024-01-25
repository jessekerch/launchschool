// what will the following code output and why?

function Player(name) {
  this.name = name;
}

Player.prototype.block = function() { console.log(`${this.name} blocking!`) };
Player.prototype.tackle = function() { console.log(`${this.name} tackling!`) };

let ham = new Player('CJ Ham');
ham.block();
ham.tackle();

function Receiver(name) {
  Player.call(this, name);
}

Receiver.prototype = Object.create(Player.prototype);
Receiver.prototype.constructor = Receiver;

Receiver.prototype.receive = function() { console.log(`${this.name} catching passes!`) };

let jjet = new Receiver('Justin Jefferson');
jjet.receive();
jjet.block();
