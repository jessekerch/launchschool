function letterPercentages(string) {
  let stringLength = string.length;
  
  let lowers = string.match(/[a-z]/g);
  let uppers = string.match(/[A-Z]/g);
  let neithers = string.match(/[^A-Za-z]/g);
  
  let lowerRatio = lowers ? lowers.length / stringLength * 100 : 0;
  let upperRatio = uppers ? uppers.length / stringLength * 100 : 0;
  let neitherRatio = neithers ? neithers.length / stringLength * 100 : 0;
  
  return { lowercase: lowerRatio.toFixed(2),
    uppercase: upperRatio.toFixed(2),
    neither: neitherRatio.toFixed(2),
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
