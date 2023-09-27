/**
 * Write a function that displays a four-pointed diamond in an nxn grid,
 * where n is an odd integer supplied as an argument to the function.
 * The argument will always be an odd integer.
 * 
 * diamond(3);
// logs
 *
***
 *
 * 
 * Data: Only strings, just add spaces or stars as needed
 * 
 * Algo:
 * spaces = n / 2 (4), stars = 1, spaces = n / 2 (4)
 * 3, 3, 3        
 * 2, 5, 2
 * 1, 7, 1
 * 0, 9, 0
 * 1, 7, 1
 * 
 * spaces = n / 2 (1), stars = 1, spaces = n / 2 (1)
 * 0, 3, 0
 * 
 */

const DIAMOND_MARK = '*';
const SPACE_MARK = ' ';

function diamond(n) {
  if (n === 1) {
    console.log(DIAMOND_MARK);
    return;
  }

  let markCount = 1;
  let spaceCount = Math.floor(n / 2);
  let markIncrement = 2;
  let spaceIncrement = 1;

  while (markCount > 0) {
    row = (SPACE_MARK.repeat(spaceCount)) + (DIAMOND_MARK.repeat(markCount));
    console.log(row);

    spaceCount -= spaceIncrement;
    markCount += markIncrement;
    if (markCount === n) {
      markIncrement = -2;
      spaceIncrement = -1;
    }
  }
}

diamond(1);

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);

// diamond(99);
