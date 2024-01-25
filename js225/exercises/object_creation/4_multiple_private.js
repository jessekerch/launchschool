let Account;

function updateAccount() {
  Account = (function() {
    let userEmail;
    let userPassword;
    let userFirstName;
    let userLastName;

    function validPassword(pwd) {
      return userPassword === pwd;
    };

    function anonymize() {
      let newDisplayName = '';
      for (let n = 0; n < 16; n++) {
        newDisplayName += Math.floor(Math.random() * 10);
      };
      return newDisplayName;
    };

    return {
      init(email, password, firstName, lastName) {
        userEmail = email;
        userPassword = password;
        userFirstName = firstName;
        userLastName = lastName;
        this.displayName = anonymize();
        return this;
      },

      email(pwd) {
        if (validPassword(pwd)) {
          return userEmail;
        } else {
          return 'Invalid Password';
        }
      },
        
      firstName(pwd) {
        if (validPassword(pwd)) {
          return userFirstName;
        } else {
          return 'Invalid Password';
        }
      },
        
      lastName(pwd) {
        if (validPassword(pwd)) {
          return userLastName;
        } else {
          return 'Invalid Password';
        }
      },

      reanonymize(pwd) {
        if (validPassword(pwd)) {
          this.displayName = anonymize();
          return true;
        } else {
          return 'Invalid Password';
        }
      },

      resetPassword(pwd, newPwd) {
        if (validPassword(pwd)) {
          userPassword = newPwd;
          return true;
        } else {
          return 'Invalid Password';
        }
      },
    };
  })()
};

updateAccount();
let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

updateAccount();
let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(bazQux.firstName('123456'));              // logs 'Invalid Password'
console.log(bazQux.email('123456'));                  // logs 'Invalid Password'

console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'