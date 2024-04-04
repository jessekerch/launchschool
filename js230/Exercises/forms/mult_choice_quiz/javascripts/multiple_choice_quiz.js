const questions = [
  {
    id: 1,
    description: "Who controls the weather with their weapon and is the navigator of the Straw Hat Pirates?",
    options: ['Luffy', 'Shanks', 'Nami', 'Sanji'],
  },
  {
    id: 2,
    description: "What is the name of the village Luffy was born in?",
    options: ['Foosha Village', 'Cocoyasi', 'Syrup', 'Shimotsuki Village'],
  },
  {
    id: 3,
    description: "What was the name of the mountain bandit that kidnapped Luffy when he was a kid?",
    options: ['Beckman', 'Lord of the Coast', 'Drake', 'Higuma'],
  },
  {
    id: 4,
    description: "Which of the following is NOT one of Tony Tony Chopper's transformations?",
    options: ['Brain Point', 'Mini Point', 'Monster Point', 'Guard Point'],
  },
  {
    id: 5,
    description: "Luffy is famous for and named after his most prized possession, his straw hat which was borrowed to him by Shanks. Who owned that very hat before Shanks?",
    options: ['No one, it was Shanks\' trademark', 'Monkey D Dragon', 'Whitebeard', 'Gol D Roger'],
  },
  {
    id: 6,
    description: "Luffy's Bounty is 1.5 billion beri, Zoro's is 120 million, Robin's is 80 million. Which Straw Hat Pirate has the lowest bounty?",
    options: ['Tony Tony Chopper', 'Nami', 'Franky', 'Brook'],
  },
  {
    id: 7,
    description: "Who resigned from the position of Admiral?",
    options: ['Fujitora', 'Akainu', 'Aokiji', 'Kizaru'],
  },
  {
    id: 8,
    description: "At Enies Lobby, how was Chopper's 'monster form' stopped?",
    options: ['He could only stay in that form for three minutes',
    'A giant pair of kairusei handcuffs were put on him',
    'He took too much damage',
    'Franky blew him into the ocean'],
  },
  {
    id: 9,
    description: "What was Nico Robin's codename while she was an agent with the Baroque Works?",
    options: ['Miss All Sunday', 'Miss Goldenweek', 'Miss Father\'s Day', 'Miss Doublefinger'],
  },
  {
    id: 10,
    description: "What was the name of the tree that provided the wood Franky ordered and used to build the Straw Hat crew their new ship, Thousand Sunny?",
    options: ['Odinwood', 'Treasure Tree Adam', 'Hercules Tree', 'Strong Atlas'],
  },
];

const answerKey = { '1': 'Nami', '2': 'Foosha Village', '3': 'Higuma', '4': 'Mini Point', '5': 'Gol D Roger', '6': 'Tony Tony Chopper', '7': 'Aokiji', '8': 'Franky blew him into the ocean', '9': 'Miss All Sunday', '10': 'Treasure Tree Adam' };

(() => {
  class Quiz {
    #form;
    #answers = answerKey;
    #questionIds = [];
    #score = 0;

    constructor(formElement) {
      this.#form = formElement;
    }

    init() {
      this.#loadQuestions(4);
      this.#addFormEvents();
    }

    #addFormEvents() {
      this.#form.addEventListener('submit', this.#gradeQuiz.bind(this));
      this.#form.addEventListener('submit', this.#displayScore.bind(this));
      document.querySelector('#reset_btn').addEventListener('click', this.#resetQuiz.bind(this));
    }

    #displayScore() {
      let scoreDisplay = document.querySelector('h1.score');
      scoreDisplay.innerText = `Your score is: ${this.#score} out of 4!`;
      scoreDisplay.style.color = this.#score > 2 ? 'green' : 'red';
    }

    #gradeQuiz(event) {
      event.preventDefault();
      document.querySelector('#submit_btn').disabled = true;
      let quizData = new FormData(this.#form);

      this.#questionIds.forEach((id) => {
        let userAnswer = quizData.get(id);
        if (!userAnswer) {
          document.querySelector('#result_' + id).innerText = `A${id}: You didn't select anything. The answer is '${this.#answers[id]}'`;
          document.querySelector('#result_' + id).style.border = '1px red solid';
        } else if (this.#answers[id] === userAnswer) {
          document.querySelector('#result_' + id).innerText = `A${id}:That's right! It's '${this.#answers[id]}'`;
          document.querySelector('#result_' + id).style.border = '1px green solid';
          this.#score += 1;
        } else {
          document.querySelector('#result_' + id).innerText = `A${id}:Sorry that's not right. The answer is '${this.#answers[id]}'`;
          document.querySelector('#result_' + id).style.border = '1px red solid';
        }
      })
    }

    #loadQuestions(n) {
      document.querySelector('form > div').replaceChildren();
      let questionTemplate = Handlebars.compile(document.querySelector('#question_template').innerHTML);
      Handlebars.registerPartial('option', document.querySelector('#option_template').innerHTML);

      while (this.#questionIds.length < n) {
        let randomId = Math.ceil(Math.random() * 10);
        if (!this.#questionIds.includes(randomId)) {
          this.#questionIds.push(randomId);
          document.querySelector('form > div').insertAdjacentHTML('beforeend', questionTemplate(questions.filter(question => question.id == randomId)[0]));
        }
      }
  
    }

    #resetQuiz(event) {
      event.preventDefault();
      this.#form.reset();
      document.querySelector('#submit_btn').disabled = false;
      document.querySelector('h1.score').innerText = '';
      this.#questionIds = [];
      this.#loadQuestions(4);
      this.#score = 0;
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const app = new Quiz(document.querySelector('form'));
    app.init();
  });
})();
