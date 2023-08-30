function logInBox(string) {
  width = string.length + 2;
  console.log('+' + '-'.repeat(width) + '+')
  console.log('|' + ' '.repeat(width) + '|')
  console.log('| ' + string + ' |');
  console.log('|' + ' '.repeat(width) + '|')
  console.log('+' + '-'.repeat(width) + '+')

}

logInBox('To boldly go where no one has gone before.');
logInBox('Eat more potatoes!');
logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+