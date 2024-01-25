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
      }
    }
  }
  return substrings;
}

console.log(getSubstr('ben', 2));
console.log(getSubstr('jesse', 3));
console.log(getSubstr('ellie', 3));
