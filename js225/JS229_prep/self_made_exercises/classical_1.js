// change this class syntax into pseudo-classical syntax
// either first or next: make the collections private data while still in the class syntax

"use strict";

let players = [];
let receivers = [];
let randomPassYards = function() {
  return Math.floor(Math.random() * 45);
}

function Player(name) {
  this.name = name;
  players.push(this);
}

Player.prototype.block = function() {
    console.log(`${this.name} blocking!`)
  }

Player.prototype.tackle = function() {
  console.log(`${this.name} tackling!`)
}

function Receiver(name) {
  this.name = name;
  players.push(this);
  receivers.push(this);
}

Receiver.prototype = Object.create(Player.prototype);
Receiver.prototype.constructor = Receiver;

Receiver.prototype.receive = function() {
  console.log(`${this.name} catching passes!`)
}

function Quarterback(name) {
  this.name = name;
}

// Quarterback.prototype = Object.create(Player.prototype);
// Quarterback.prototype.constructor = Quarterback;

Quarterback.prototype.pass = function() {
  console.log(`${this.name} passing the ball!`)
}

Quarterback.prototype.tackle = function() {
  console.log(`${this.name} is trying to tackle but isn't very good at it!`)
}

Quarterback.prototype.huddle = function() {
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

let ham = new Player('CJ Ham');
let kirk = new Quarterback('Kirk Cousins');
let kj = new Receiver('KJ Osbourne');
let tj = new Receiver('TJ Hockenson');
let jjet = new Receiver('Justin Jefferson');

// kirk.huddle();
console.log(kirk.name);
