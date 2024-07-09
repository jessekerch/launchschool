function getProperty(obj, key) {
    return obj[key];
}
var obj = {
    name: 'Jesse',
    feet: 2,
};
var prop1 = getProperty(obj, 'name');
var prop2 = getProperty(obj, 'feet');
var prop3 = getProperty(obj, 'not');
console.log(prop1, prop2, prop3);
