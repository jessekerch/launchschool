// function isValidLocal(str) {
//   if (/[^a-z0-9]/i.test(str)) return false;
//   return (/[A-Za-z0-9]+/.test(str));
// }

// function isValidDomain(str) {
//   parts = str.split('.');
//   if (parts.includes('')) return false;
//   if (parts.some((part) => /[^a-z]+/.test(part))) return false;
//   parts = parts.filter((part) => /[a-z]+/i.test(part))
//              .filter((part) => part.length >= 1);
//   return parts.length >= 2;
// }

function isValidEmail(email) {
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false