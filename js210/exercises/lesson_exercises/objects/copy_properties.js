function copyProperties(object1, object2) {
  let copyCount = 0;

  for (let property in object1) {
    object2[property] = object1[property];
    copyCount += 1;
  }

  return copyCount;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }