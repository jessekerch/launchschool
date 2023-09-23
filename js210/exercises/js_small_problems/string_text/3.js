function letterCaseCount(string) {
  // const letterCount = { lowercase: 0, uppercase: 0, neither: 0 };

  // for (let idx = 0; idx < string.length; idx += 1) {
  //   if (/[a-z]/.test(string[idx])) {
  //     letterCount.lowercase += 1;
  //   } else if (/[A-Z]/.test(string[idx])) {
  //     letterCount.uppercase += 1;
  //   } else {
  //     letterCount.neither += 1;
  //   }
  // }

  // return letterCount;

  const lowerCase = string.match(/[a-z]/g) || [];
  const upperCase = string.match(/[A-Z]/g) || [];
  const neitherCase = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowerCase.length,
    uppercase: upperCase.length,
    neither: neitherCase.length,
  };

}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));      // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }