let timer = {
  hours: 0, // (00-99)
  minutes: 0, // (00-59)
  seconds: 0, // (00-59)
  centi: 0, // (00-99)
  
  run: () => {
    timer.advance();
    timer.updateDisplay();
  },

  updateDisplay: () => {
    let hours = this.hours > 9 ? `${this.hours}` : '0' + `${this.hours}`;
    let minutes = this.minutes > 9 ? `${this.minutes}` : '0' + `${this.minutes}`;
    let seconds = this.seconds > 9 ? `${this.seconds}` : '0' + `${this.seconds}`;
    let centi = this.centi > 9 ? `${this.centi}` : '0' + `${this.centi}`;
    let timeString = hours + ':' + minutes + ':' + seconds + ':' + centi;
    document.querySelector('h1').innerText = timeString;

  },

  advance: () => {
    if (this.centi < 99 ) {
      this.centi += 1;
    } else {
      this.centi = 0;
      if (this.seconds < 59 ) {
        this.seconds += 1;
      } else {
        this.seconds = 0;
        if (this.minutes < 59 ) {
          this.minutes += 1;
        } else {
          this.minutes = 0;
          if (this.hours < 59 ) {
            this.hours += 1;
          } else {
            this.hours = 0;
          }
        }
      }
    }
  },
  
  interval: null,

  startStop: () => {
    if (timer.interval) {
      clearInterval(timer.interval);
      timer.interval = null;
      document.querySelector('.start').style.backgroundColor = 'green';
      document.querySelector('.start').value = 'Start';
    } else {
      timer.interval = setInterval(timer.run, 10);
      document.querySelector('.start').style.backgroundColor = 'red';
      document.querySelector('.start').value = 'Stop';
    }
  },

  reset: () => {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.centi = 0;

    timer.updateDisplay();
  },
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('.start').addEventListener('click', function(event) {
    timer.startStop();
  })

  document.querySelector('.reset').addEventListener('click', function(event) {
    timer.reset();
  })

});
