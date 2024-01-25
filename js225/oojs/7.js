function UserCreator(name) {
  this.name = name;
}

UserCreator.prototype.sayName = function() {
  console.log(`I'm ${this.name}`);
}

function PaidUserCreator(paidName, balance) {
  UserCreator.call(this, paidName);
  this.balance = balance;
}

PaidUserCreator.prototype = Object.create(UserCreator.prototype);
// ??? Why can't I just reassign it to UserCreator.prototype? Why need to use .create()?
// Because they hold different things. PaidUserCreator.prototype should have functionality for paidUsers. UserCreator.prototype holds functionality for other users. We don't want the subclass prototype to reference the same object to the same object as the superclass prototype property. They'd be the same and would have the same functionality. We want the subclass prototype property to reference an object which is new, but uses the existing superclass function's prototype object as the prototype. So now our subclass's prototype is the superclass, and JavaScript can use the hierarchical prototypal chain. The subclass now extends the superclass. 

PaidUserCreator.prototype.constructor = PaidUserCreator;
// You have the remember to set the constructor property of the child to the prototype.constructor of the child. When we reassigned the prototype property, the constructor property was set to point to the prototype.constructor of the parent. We have to set the prototype.constructor to the child function itself (the subclass or subfunction).

PaidUserCreator.prototype.increase = function () {
  this.balance += 1;
}

const user1 = new UserCreator("Dean");
// console.log(user1.__proto__ === UserCreator.prototype);

const paidUser1 = new PaidUserCreator("Ryan", 3);

paidUser1.increase();
console.log(paidUser1.balance);
paidUser1.sayName();
