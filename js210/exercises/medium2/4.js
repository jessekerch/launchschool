const doubler = makeDoubler('Victor');

function makeDoubler(callerName) {
  return number => {
    console.log(`This function was called by ${callerName}.`)
    return number + number;
  }
}

console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.
