function incrementProperty(object, name) {
  if (Object.keys(object).indexOf(name) !== -1) {
    object[name] += 1;
  } else {
    object[name] = 1;
  }

  return object[name];
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }
