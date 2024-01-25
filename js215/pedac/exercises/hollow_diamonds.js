/*
Write a function that displays a four-pointed diamond in an nxn grid,
where n is an odd integer supplied as an argument to the function.
You may assume that the argument will always be an odd integer.

input: number, odd integer
output: string, log lines of strings (ok to log separately, rather than all at once?)

rules:
always be precisely one input argument? 
always odd integer (positive, right?) (negative would be identical, right? -3 diamond === 3 diamond)
very large integers too? Up to a reasonable amount like 15?
diamond display character (*) always OK right?
direction of stars +1 (going up)
switch direction of stars to -1 (going down) after a full line of stars (stars = n)
calculate stars first, use that to calculate spaces (don't need to direction change on spaces)
don't need to switch direction on spaces, because it's based on stars

four-pointed diamond in an nxn grid
  *   (1: 2 space, 1 stars, 2 space): (n+(-1*stars)/2 or 0 spaces, 1 star, (n+(-1*stars)/2 spaces
 ***  (2: 1 space, 3 stars, 1 space): (n+(-1*stars)/2 or 0 spaces, 1+(1*2) star, (n+(-1*stars)/2 spaces
***** (3: 0 space, 5 stars, 0 space): (n+(-1*stars)/2 or 0 spaces, 3+(1*2) stars, (n+(-1*stars)/2 or 0 spaces
  => if stars = n; switch stars direction from +1 to -1
 ***  (2: 1 space, 3 stars, 1 space): (n+(-1*stars)/2 or 0 spaces, 5+(-1*2) star, (n+(-1*stars)/2 spaces
  *   (1: 2 space, 1 stars, 2 space): (n+(-1*stars)/2 or 0 spaces, 3+(-1*2) star, (n+(-1*stars)/2 spaces

n = 7
   *   (3 spaces, 1 star, 3 spaces)
  ***  (2 spaces, 3 stars, 2 spaces
 ***** (1 space, 5 stars, 1 space)
*******(0 spaces, 7 stars, 0 spaces)
    !SWITCH DIRECTION!
 ***** (1 space, 5 stars, 1 space)
...

 Examples:

Data:
input: number
output: string, concatenate strings together and output whole line, good

Algo:
declare input parameter/variable n
declare direction = +1;
declare starCount at 1
declare spaceCount, no initializer
for rows from 1 to incl n, n+1 each iteration
  spaceCount = if starCount is n then 0 otherwise (n-starCount)/2
  output line: ' ' repeat spaceCount times + '*' repeat starCount times + ' ' repeat spaceCount times
  if starCount = n, change direction to -1
  starCount += (direction * 2)
end for loop
no return (undefined)
*/

function diamond(n) {
  let direction = 1;
  let starCount = 1;
  let spaceCount;
  let line;
  for (let row = 1; row <= n; row += 1) {
    spaceCount = (starCount === n) ? 0 : (n - starCount) / 2;
    line = ' '.repeat(spaceCount) + '*'.repeat(starCount) + ' '.repeat(spaceCount);
    console.log(line);
    if (starCount === n) direction = -1;
    starCount += (direction * 2);
  }
}

diamond(1);
// logs
// *

diamond(3); // n = 3, direction = 1, starCount = 1, spaceCount
// logs for 1 to 3, row = 1
//  *  // spaceCount = 1;  * ; starCount = 3
// *** // spaceCount = 0;***; direction = -1; starCount = 1;
//  * // spaceCount = 1; * ;starCount = -1

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

diamond(15);
