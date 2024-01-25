class UserCreator {
  constructor (name) {
    this.name = name;
  }

  sayName() {
    console.log(`I'm ${this.name}`);
  }
}

class PaidUserCreator extends UserCreator {
  constructor(paidName, balance) {
    super(paidName);
    this.balance = balance;
  }

  increase() {
    this.balance += 1;
  }
}

console.log(typeof UserCreator);
console.log(typeof PaidUserCreator);

const user1 = new UserCreator("Dean");
const paidUser1 = new PaidUserCreator("Ryan", 3);

