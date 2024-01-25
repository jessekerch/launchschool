"use strict";

let boat = {
  name: 'boat',
  log() {
    console.log(`this is ${this.name}`);
  }
}

let logGlobal = function() {
  console.log(`this is ${this}`); 
}

boat.log(); // this is boat
logGlobal(); // this is undefined

