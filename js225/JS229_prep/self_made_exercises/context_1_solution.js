// what will the following code output and why?

function Player(name) {
  this.name = name;
}

Player.prototype.block = function() { console.log(`${this.name} blocking!`) };
Player.prototype.tackle = function() { console.log(`${this.name} tackling!`) };

let ham = new Player('CJ Ham');
ham.block(); // CJ Ham blocking!
ham.tackle(); // CJ Ham tackling!
