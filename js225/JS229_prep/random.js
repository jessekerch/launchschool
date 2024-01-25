class Student {
  constructor(name) {
    this.name = name;
  }

  generateNumber() {
    let number = Math.floor(Math.random() * 44) + 1;
    console.log(number);
  }
}

let jesse = new Student('Jesse');
jesse.generateNumber();
