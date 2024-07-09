function getProperty(obj, key) {
    return obj[key]; // Error: No index signature with a parameter of type 'string' was found on type '{}'
}
var obj = {
    full_name: "Jesse Kerchey",
    age: 198,
};
var x = getProperty(obj, 'full_name');
var y = getProperty(obj, 'age');
