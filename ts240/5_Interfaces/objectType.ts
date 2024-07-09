function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]; // Error: No index signature with a parameter of type 'string' was found on type '{}'
}

const obj = {
  full_name: "Jesse Kerchey",
  age: 198,
};

const x = getProperty(obj, 'full_name');
const y = getProperty(obj, 'age');

