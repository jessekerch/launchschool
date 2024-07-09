var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var person = { name: "John", age: 30 };
var newPerson = __assign({ age: 31 }, person);
// 'age' is specified more than once, so this usage will be overwritten.
// This spread always overwrites this property.
console.log(newPerson);
