const person = { name: 'Victor', jesse: 'Kerch' };
const otherPerson = { name: 'Victor', jesse: 'Kerch' };

function equalObjects(obj1, obj2) {
  for (entity in obj1) {
    if (obj1[entity] !== obj2[entity]) return false;
  }
  for (entity in obj2) {
    if (obj1[entity] !== obj2[entity]) return false;
  }
  return true;
}

console.log(equalObjects(person, otherPerson));    // false -- expected: true
