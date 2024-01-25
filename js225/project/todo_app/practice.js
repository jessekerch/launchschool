let ids = [1, 2, 2, 3, 4];
let idQtys = ids.reduce((acc, id) => {
  acc[id] = acc[id] ? acc[id] + 1 : 1;
  return acc
  }, {});
console.log(idQtys);