var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.describe = function () {
        return "".concat(this.name, " is ").concat(this.age, " years old");
    };
    return Person;
}());
var person = new Person('Foxy', 5);
console.log(person.describe());
