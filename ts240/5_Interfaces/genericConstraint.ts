function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const obj = {
  name: 'Jesse',
  feet: 2,
}

const prop1 = getProperty(obj, 'name');
const prop2 = getProperty(obj, 'feet');
const prop3 = getProperty(obj, 'not');
console.log(prop1, prop2, prop3);
