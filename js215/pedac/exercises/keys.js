const coll1 = [{ id: 1, size: 'small', state: 'IA' }, 
{ id: 2, size: 'medium', state: 'KY'},
{id: 3, size: 'medium', state: 'TN'}];

const coll2 = [{ cat: 'main', cost: 'high' }, 
{ cat: 'side', cost: 'mid' },
{ cat: 'drink', cost: 'low' }];

function getKeys(array, k) {
  return array.map((obj) => {
    Object.values(obj);
  });

  // return entries;
}

console.log(getKeys(coll1, ['id', 'size']));
console.log(getKeys(coll2, ['cost']));
