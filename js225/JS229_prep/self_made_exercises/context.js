// what will the following code output and why?

function Player(name) {
  this.name = name;
}

Player.prototype.block = () => console.log(`${this.name} blocking!`);
Player.prototype.tackle = () => console.log(`${this.name} tackling!`);

let ham = new Player('CJ Ham');
ham.block();
ham.tackle();

