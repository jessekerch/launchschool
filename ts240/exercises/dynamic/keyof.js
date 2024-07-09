var jkercheval = {
    id: 123,
    name: 'Jesse',
    email: 'jk@kerch.io'
};
function getKey(user, key) {
    if (key in user) {
        return user[key];
    }
    else {
        return "The key ".concat(key, " isn't a property of that object.");
    }
}
console.log(getKey(jkercheval, 'email'));
console.log(getKey(jkercheval, 'full_name'));
