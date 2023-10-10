function myFunc() {
  let name = "Jesse";
  return function() {
    console.log(name);
  };
}

let printName = myFunc();
printName(); // Jesse