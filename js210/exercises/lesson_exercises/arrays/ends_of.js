function endsOf(beginningArr, endingArr) {
  bothEnds = [];

  bothEnds.push(beginningArr[0]);
  bothEnds.push(endingArr[endingArr.length - 1]);

  return bothEnds;
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]
