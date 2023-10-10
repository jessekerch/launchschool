let toys = ['truck', 'ball', 'doll'];

addToy(toys, 'tamagotchi');

function addToy(toyArr, newToy) {
  let newIdx = toyArr.length;
  toyArr[newIdx] = newToy;
  return toyArr;
};
