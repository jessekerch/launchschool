document.addEventListener('DOMContentLoaded', function(event) {
  class Game {
    constructor() {
      this.incorrect = 0;
      this.lettersGuessed = [];
      this.correctSpaces = 0;
      this.availableKeys = 'abcdefghijklmnopqrstuvwxyz'.split('');
      this.word = randomWord();
      if (!this.word) {
        this.displayMessage("Sorry, there are no more words!");
        return this;
      }
      this.word = this.word.split("");

      this.bind();
      this.setAppleClass();
      this.hideReplayLink();
      this.resetGuesses();
      this.createBlanks();
      this.setGameStatus();
      this.displayMessage('');
    }

    setGameStatus(status) {
      document.querySelector('body').classList.remove('win', 'lose');
      if (status) {
        document.querySelector('body').className = status;        
      }
    }

    hideReplayLink() {
      replay.className = ('');
    }

    showReplayLink() {
      replay.className = ('visible');
    }

    resetGuesses() {
      let spans = guesses.querySelectorAll('span');
      spans.forEach(span => {
        span.remove();
      })
    }

    createBlanks() {
      let word = document.createElement('h2');
      word.innerText = 'Word:';
      spaces.replaceChildren(word);
      for (let n = 0; n < this.word.length; n++) {
        let span = document.createElement('span');
        spaces.appendChild(span);
      };
    }

    recordGuess(key) {
      let letterElement = document.createElement('span');
      letterElement.innerText = key.toUpperCase();
      guesses.appendChild(letterElement);

      this.lettersGuessed.push(key);
    }

    revealLetters(key) {
      for (let n = 0; n < this.word.length; n++) {
        if (this.word[n] === key) {
          spaces.children[n + 1].innerText = key.toUpperCase();
          this.correctSpaces += 1;
        }
      };
    }

    dropApple() {
      this.incorrect = this.incorrect < 5 ? this.incorrect + 1 : 6;
      this.setAppleClass();
    }

    setAppleClass() {
      apples.className = 'guess_' + this.incorrect;
    }

    processGuess(event) {
      let pressedKey = event.key;
      if (this.availableKeys.includes(pressedKey)) {
        this.recordGuess(pressedKey);
  
        // remove pressed key from available keys (unbind it)
        this.availableKeys.splice(this.availableKeys.indexOf(pressedKey), 1);
  
        if (this.word.includes(pressedKey)) {
          this.revealLetters(pressedKey);
          if (this.correctSpaces >= this.word.length) {
            this.youWin();
          }
        } else {
          this.dropApple();
          if (this.incorrect >= 6) {
            this.youLose();
          }
        }
      }
  

    }

    bind() {
      this.processGuessHandler = (e) => this.processGuess(e);
      document.addEventListener('keyup', this.processGuessHandler);
    }
    
    unbind() {
      document.removeEventListener('keyup', this.processGuessHandler);
    }

    youWin() {
      this.unbind();
      this.showReplayLink();
      this.setGameStatus('win');
      this.displayMessage('You win! Play again?');
    }

    youLose() {
      this.unbind();
      this.showReplayLink();
      this.setGameStatus('lose');
      this.displayMessage('Sorry you\'re out of guesses. Play again?');
    }

    displayMessage(text) {
      message.textContent = text;
    }
  }

  const randomWord = function() {
    let words = ['apple', 'banana', 'orange', 'pear', 'mango'];
    
    return function() {
      let idx = Math.floor(Math.random() * words.length);
      let word = words.splice(idx, 1)[0];
      return word;
    };
  }();
  
  let tree = document.querySelector("#tree");
  let apples = document.querySelector("#apples");
  let message = document.querySelector("#message");
  let replay = document.querySelector("#replay");
  let spaces = document.querySelector("#spaces");
  let guesses = document.querySelector("#guesses");
  
  new Game();
  
  replay.addEventListener('click', function(event) {
    event.preventDefault();
    new Game();
  });

})