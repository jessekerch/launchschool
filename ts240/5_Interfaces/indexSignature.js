var obj = {
    1: "Jane",
    2: "30",
    3: "female",
};
console.log(Object.keys(obj).map(function (key) { return Number(key); })
    .every(function (key) { return typeof key === "number"; }));
