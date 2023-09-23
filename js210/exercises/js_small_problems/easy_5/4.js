function centerOf(string) {
  let length = string.length;
  if (length % 2 === 0) {
    let halfWay = string.length / 2;
    console.log(string[halfWay - 1] + string[halfWay]);
  } else {
    let halfWay = Math.floor(string.length / 2);
    console.log(string[halfWay]);
  }
}


centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"