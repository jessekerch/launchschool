/**
Problem
Write a program that takes one argument—the total number of switches
and returns an array of the lights that are on after n repetitions.

Example
lightsOn(5);        // [1, 4]

Data
Object with light number: true/false for on/off

Algo
Build an object "bank"
Iterate idx from 1 to switches (inclusive), iterate by 1
  add idx and true to bank object

Iterate "number" from 1 to switches (inclusive), iterate by 1
  if bank[number] is divisible by pass (1 on first pass)
    toggle bank number (if true, toggle to false, and vice versa)

make a "result" array
for (key, value) of bank, 
  add bank number to array if it's true

return result


*/

function toggle(switchState) {
  if (switchState) return false;
  return true;
}

function lightsOn(switches) {
  const bank = {};
  for (let idx = 1; idx <= switches; idx += 1) bank[idx] = false;

  for (let pass = 1; pass <= switches; pass += 1) {

    for (let number = 1; number <= switches; number += 1) {
      if (number % pass === 0) {
        bank[number] = toggle(bank[number]);
      }
    }

  }

// Iterate "number" from 1 to switches (inclusive), iterate by 1
//   if bank[number] is divisible by pass (1 on first pass)
//     toggle bank number (if true, toggle to false, and vice versa)

  let result = [];
  for (let idx = 1; idx <= switches; idx += 1) {
    if (bank[idx]) result.push(idx);
  }

  return result;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]