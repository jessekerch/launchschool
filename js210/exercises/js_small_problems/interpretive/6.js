/* eslint-disable max-lines-per-function */
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
 * edgeSpace = 0;
 * midSpace = n - 3 / 2 (3);
 * increment = 1;
 * 
 * row = edgespace * midspace * midspace * edgespace
 * (*   *   *)
 * 
 * edgespace += increment (1)
 * midspace -= increment (2)
 * ( *  *  * )
 * 
 * edgespace += increment (2)
 * midspace -= increment (1)
 * (  * * *  )
 * 
 * edgespace += increment (3)
 * midspace -= increment (0)
 * (   ***   )
 * 
 *  * edgespace += increment (2)
 * midspace -= increment (1)
 * (  * * *  )


 */

const STAR_MARK = '*';
const SPACE_MARK = ' ';

function star(n) {
  if (n === 1) {
    console.log(STAR_MARK);
    return;
  }

  let edgeSpace = 0;
  let midSpace = Math.floor((n - 3) / 2);
  let edge;
  let mid;
  let row;
  let increment = 1;
  let line = 1;

  while (line < n) {
    if (line === Math.floor(n / 2)) {
      increment = -1;
      console.log(STAR_MARK.repeat(n));
      line += 1;
      continue;
    }

    edge = SPACE_MARK.repeat(edgeSpace);
    mid = SPACE_MARK.repeat(midSpace);

    row = (edge + STAR_MARK + mid + STAR_MARK + mid + STAR_MARK +  edge);
    console.log(row);

    midSpace -= increment;
    edgeSpace += increment;
    line += 1;
  }

}

star(7);

star(9);
