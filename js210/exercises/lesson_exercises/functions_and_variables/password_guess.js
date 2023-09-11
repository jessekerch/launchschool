const rlSync = require('readline-sync');

function passGuess(pass) {
  guessFails = 0;

  do {
    let guess = rlSync.question('What is the password: ');
    if (guess === pass) {
      console.log('You have successfully loggged in.\n');
      return;
    }

    console.log('That password is incorrect.\n')
    guessFails += 1;
  } while (guessFails < 3);

  console.log('You have been denied access.\n')
}

passGuess('password');
