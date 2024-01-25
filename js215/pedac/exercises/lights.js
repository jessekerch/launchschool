/* You have a bank of switches before you, numbered from 1 to n.
Every switch is connected to exactly one light that is initially off.
You walk down the row of switches and toggle every one of them.
You walk back to the beginning of the row and start another pass.
On this second pass, you toggle switches 2, 4, 6, and so on.
On the third pass, you go back to the beginning again, this time toggling switches
3, 6, 9, and so on. You continue to repeat this process
until you have gone through n repetitions.

// Write a program that takes one argument —the total number of switches—
and returns an array of the lights that are on after n repetitions.

// Examples:

input: number, number of switches
return: array of numbers, which lights are on 

switches numbered 1 to n
all initially off
first toggle all switches on (1, 2, .. n)
then toggle every 2nd switch off (2, 4 .. n)
then toggle every 3rd switch on (3, 6 .. n)
etc
finally toggle the nth switch (n)
return array of switches left on

always one input, only, number
always positive integer

data:
input number
object for switch bank? 
{1: false, 2: true, 3: true }
array?
[[1, true][2, false][3, false]]
return array

algo:
let repCount = 1;
build bank of light switches, empty object
iterate lightNum from 1 to n
  object lightNum property = true
  {1: true, 2: true, 3: true... n: true}
while repCount <= n
  for lightNums from 1 to n
    if lightNum % repCount = 0, "flip switch"
      if bank lightNum (i.e. true) make it false, otherwise make it true  
  repCount += 1
end while loop
return bank keys which have value true
*/

function buildLightBank(n) {
  let obj = {};
  for (let num = 1; num <= n; num += 1) {
    obj[num] = false;
  }
  return obj;
}

function lightsOn(switches) {
  let repCount = 1;
  let bank = buildLightBank(switches);
  
  while (repCount <= switches) {
    for (let num = 1; num <= switches; num += 1) {
      if (num % repCount === 0) {
        bank[num] = bank[num] ? false : true;
      }
    }
    repCount += 1;
  }

  return Object.keys(bank).filter((key) => bank[key]);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
