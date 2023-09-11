function isPalindrome(string) {
  let firstEnd = parseInt(string.length / 2, 10);
  let firstHalf = string.split('').slice(0, firstEnd).join('');
  let secondStart = string.length % 2 === 0 ? firstEnd : firstEnd + 1;
  let secondHalf = string.split('').slice(secondStart).reverse().join('');

  return firstHalf === secondHalf;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
