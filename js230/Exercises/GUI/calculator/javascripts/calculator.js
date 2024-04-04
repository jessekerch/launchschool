let calculator = {
  digits: '0',

  stack: [],

  calculation: '',

  clearEverything() {
    this.digits = '0';
    this.stack = [];
    this.calculation = '';
    document.querySelector('.calculation').innerText = this.calculation;
    document.querySelector('.current_num').innerText = '0';
},

clearDigits() {
  this.digits = '0';
  document.querySelector('.current_num').innerText = '0';
},

performOp(operator) {
  switch (operator) {
    case 'CE':
      this.clearEverything();
      break;
    case 'C':
      this.clearDigits();
      break;
    case 'NEG':
      if (Number(this.digits) > 0) {
        this.digits = '-' + this.digits;
      } else if (Number(this.digits) < 0) {
        this.digits = String(Number(this.digits) * -1);
      }
      document.querySelector('.current_num').innerText = this.digits;
      break;
    default:
      // if there is a result from a previous calculation
      if (this.calculation === '' && this.stack.length !== 0) this.digits = this.stack.shift(); 
      this.stack.push(this.digits);
      this.stack.push(operator);
      this.calculation += this.digits + ' ' + operator + ' ';
      document.querySelector('.calculation').innerText = this.calculation;
      document.querySelector('.current_num').innerText = '0';
      this.digits = '0';
      break;
  }
},

  addDigit(newDigit) {
    // if there is a result from a previous calculation
    if (this.calculation === '' && this.stack.length !== 0) this.clearEverything();
    if (this.digits === '0') this.digits = '';
    this.digits = this.digits + newDigit;
    document.querySelector('.current_num').innerText = this.digits;
  },

  addDot() {
    if (!this.digits.includes('.')) this.digits = this.digits + '.';
    document.querySelector('.current_num').innerText = this.digits;
  },

  calculateResult() {
    this.stack.push(this.digits);
    this.calculation = '';
    document.querySelector('.calculation').innerText = this.calculation;
    let result = Number(this.stack.shift());
    while (this.stack.length > 0) {
      let frame = this.stack.shift();
      if (/[0-9.]/.test(frame)) {
        console.log('digit found on stack');
      } else if (/[÷x\-+%]/.test(frame)) {
        switch (frame) {
          case '÷':
            result = result / Number(this.stack.shift());
            break;
          case 'x':
            result = result * Number(this.stack.shift());
            break;
          case '-':
            result = result - Number(this.stack.shift());
            break;
          case '+':
            result = result + Number(this.stack.shift());
            break;
          case '%':
            result = result % Number(this.stack.shift());
            break;
        }
      }
    }

    this.digits = String(result);
    this.stack = [this.digits];
    this.calculation = '';
    document.querySelector('.current_num').innerText = this.digits;
    document.querySelector('.calculation').innerText = '';
  },
}

document.addEventListener('DOMContentLoaded', function() {
  let calculation = document.querySelector('.calculation');
  let currentNum = document.querySelector('.current_num');
  document.querySelector('.buttons').addEventListener(('click'), (event) => {
    event.preventDefault();
    if (event.target.classList.contains('digit')) {
      calculator.addDigit(event.target.textContent);
    } else if (event.target.classList.contains('dot')) {
      calculator.addDot();
    } else if (event.target.classList.contains('op')) {
      calculator.performOp(event.target.textContent);
    } else if (event.target.classList.contains('result_button')) {
      calculator.calculateResult();
    }
  })
});
