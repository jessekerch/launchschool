// INCOMPLETE!
// Maybe need to reverse and run through iteration again, adding all unique substrings again??

function getSubstr(string, count) {
  let substrings = [];
  let chars = string.split('');

  for (let outerIdx = 0; outerIdx < chars.length; outerIdx += 1) {
 
    for (let innerIdx = 0; innerIdx < chars.length; innerIdx += 1) {
      let innerStart = innerIdx;
      let innerEnd = innerIdx + count - 1;
      
      if (outerIdx >= innerStart && outerIdx <= innerEnd) continue;

      let substrArr = [chars[outerIdx]].concat(chars.slice(innerStart, innerEnd));
      if (substrArr.length === count) {
        let substring = substrArr.join('');
        if (!substrings.includes(substring)) substrings.push(substring);
        substring = substring.split('').reverse().join('');
        if (!substrings.includes(substring)) substrings.push(substring);
      }
    }
  }
  return substrings;
}

// console.log(getSubstr('ben', 1));
console.log(getSubstr('jesse', 3).sort());
console.log(getSubstr('essej', 3).sort());
// console.log(getSubstr('ellie', 3));
