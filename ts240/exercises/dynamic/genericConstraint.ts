type Beer = {
  hop: string;
  malt: string;
  abv: number;
}

const paleAle: Beer = {
  hop: 'Citra',
  malt: 'Weyermann',
  abv: 7.0,
}

function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

console.log(getProperty(paleAle, 'hop'));
console.log(getProperty(paleAle, 'mash'));
