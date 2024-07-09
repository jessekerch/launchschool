type CustomArray = {
  [index: number]: string | number;
};

const customArray: CustomArray = ["apple", 42, "banana"];

function processCustomArray(arr: CustomArray) {
  if (Array.isArray(arr)) {
    return arr.filter((elem) => typeof elem === "string")
    .map(elem => elem.toUpperCase());
  }
}

console.log(processCustomArray(customArray));
