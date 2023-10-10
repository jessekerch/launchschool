const item = { red: true, green: false, wheels: true, portable: true };

let isRed = (item) => {
  if (item.red) console.log("it's red");
};

let isGreen = (item) => {
  if (item.green) console.log("it's green");
}

function hasWheels(item) {
  if (item.wheels) console.log("it's got wheels");
}

function isPortable(item) {
  if (item.portable) console.log("it's portable");
}

isRed(item) && isPortable(item);
isGreen(item) || hasWheels(item);
