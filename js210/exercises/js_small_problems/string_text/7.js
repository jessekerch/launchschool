function staggeredCase(sentence) {
  let idx = 0;
  let chars = sentence.split('');
  let staggered = chars.map((char) => {
    if (idx % 2 === 0 && /[A-Za-z]/.test(char)) {
      idx += 1;
      return char.toUpperCase();
    } else if (idx % 2 === 1 && /[A-Za-z]/.test(char)) {
      idx += 1;
      return char.toLowerCase();
    } else {
      return char;
    }
  });
  return staggered.join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 444 nUmBeRs"