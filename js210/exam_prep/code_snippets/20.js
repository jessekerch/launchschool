function removeVowels(string) {
  let newString = string.replace(/[aeiou]/gi, '');
  console.log(newString);
}

removeVowels('alphabet');
