interface User {
  [key: number]: string;
}

const obj: User = {
  1: "Jane",
  2: "30",
  3: "female",
};

console.log(Object.keys(obj).map(key => Number(key))
.every((key) => typeof key === "number"));