function triangle(cols) {
  const BLANK = '>';
  const MARK = 'M';
  let spaces;
  let stars;
  for (row = 1; row <= cols; row += 1) {
    spaces = cols - row;
    stars = row;
    console.log(BLANK.repeat(spaces) + MARK.repeat(stars));
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
