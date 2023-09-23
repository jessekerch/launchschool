function reverseNumber(number) {
  let array = String(number).split('');
  let reversedString = array.reverse().join('');
  console.log(Number(reversedString));
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1
