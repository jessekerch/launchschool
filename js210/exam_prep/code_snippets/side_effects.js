function thisIsPure() {
  return 'pure';
}

function callingPure() {
  return thisIsPure();
}

console.log(callingPure());
