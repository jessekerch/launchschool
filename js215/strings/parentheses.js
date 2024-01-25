/* 
Iterate over each char in string
if it's '(', add it to the lefts array ([])
if it's ')', and if lefts.length > 0, delete one from lefts
else return false
at the end, return true if lefts array is empty

((What) (is this))?')
*/

function isBalanced(str) {
  let lefts = 0;

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === '(') {
      lefts += 1;
    } else if (str[idx] === ')' && lefts <= 0) {
      return false;
    } else if (str[idx] === ')' && lefts > 0) {
      lefts -= 1;
    }
  }

  return (lefts === 0);
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false