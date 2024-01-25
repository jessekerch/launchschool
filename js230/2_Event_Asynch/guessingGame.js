document.addEventListener('DOMContentLoaded', () => {
  let input = document.querySelector('#guess');
  let form = document.querySelector('form');
  let link = document.querySelector('a');
  let paragraph = document.querySelector('p');
  let answer;
  let guesses;
  
  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    paragraph.textContent = 'Guess a number from 1 to 100';
    input.value = '';
  }

  
  form.addEventListener('submit', event => {
    event.preventDefault();
    let guess = parseInt(input.value, 10);
    guesses += 1;

    let message;
    if (guess === answer) {
      message = `You got it in ${guesses} tries! New game?`;
    } else if (guess > answer) {
      message = `Nope, the answer is lower than ${guess}`;
    } else if (guess < answer) {
      message = `Nope, the answer is higher than ${guess}`;
    }
    
    input.value = '';
    paragraph.textContent = message;
  })

  link.addEventListener('click', event => {
    event.preventDefault();
    newGame();
  })

  newGame();
});