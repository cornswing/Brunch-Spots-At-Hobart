'use strict';

// Declare elements
const quizMessage = document.querySelector('.quizMessage');
const startBtn = document.querySelector('.startButton');
const nextBtn = document.querySelector('.nextButton');
const answerBtn = document.querySelector('.answerButton');
const img = document.querySelector('.image');
const choiceList = document.querySelector('.choiceList');
const result = document.querySelector('.result');
const image = document.querySelector('.image');

// List of questions
var questions = [
  {
    image: 0,
    choices: [
      'Born Wild',
      'Born This Way',
      'Born In Brunswick',
      'Born In The Borders',
    ],
    correctAnswer: 2,
  },
  {
    image: 1,
    choices: [
      'Sisterhood',
      'Little Sister Cafe',
      'The Greenhouse Of Orange',
      'The Sisters Kitchen Garden Cafe ',
    ],
    correctAnswer: 0,
  },
  {
    image: 2,
    choices: [
      'The Bird Cafe',
      'Abel Land Cafe',
      'Pigeon Hole Cafe',
      'Round Birds Cant Fly Cafe',
    ],
    correctAnswer: 2,
  },
  {
    image: 3,
    choices: [
      'Berta',
      'Godmother',
      'Machine Laundry Cafe',
      'How I Met Your Mother',
    ],
    correctAnswer: 0,
  },
  {
    image: 4,
    choices: [
      'Horseshoe Inn',
      'Horse To Water',
      'Room For A Pony',
      'Dark Horse Cafe',
    ],
    correctAnswer: 2,
  },
  {
    image: 5,
    choices: ['Bento', 'Kosaten', 'Suminato', 'Yamashita'],
    correctAnswer: 2,
  },
  {
    image: 6,
    choices: [
      'Three Machines',
      'Laundry & Coffee',
      'La Marzocco Cafe',
      'Machine Laundry Cafe',
    ],
    correctAnswer: 3,
  },
  {
    image: 7,
    choices: ['Abel Land', 'La La Land', 'The Sunny Cafe', 'Egg Land Cafe'],
    correctAnswer: 0,
  },
  {
    image: 8,
    choices: ['Dark', 'Berta', 'Pilgrim Coffee', 'Friends And Family'],
    correctAnswer: 2,
  },
];

let currentQuestion = 0;
let correctAnswers = 0;
let quizOver = false;

// MAIN
window.addEventListener('DOMContentLoaded', function (e) {
  displayCurrentQuestion();
  displayPhoto();
  quizMessage.classList.add('hidden');

  nextBtn.addEventListener('click', function () {
    if (!quizOver) {
      var radioBtnChecked = document.querySelector('input[type=radio]:checked');

      if (radioBtnChecked === null) {
        quizMessage.textContent = 'Please select an answer';
        quizMessage.classList.remove('hidden');
      } else {
        console.log(radioBtnChecked.value);
        quizMessage.classList.add('hidden');
        if (
          parseInt(radioBtnChecked.value) ===
          questions[currentQuestion].correctAnswer
        ) {
          correctAnswers++;
          console.log(correctAnswers);
        }
        currentQuestion++;

        if (currentQuestion < questions.length) {
          displayCurrentQuestion();
          displayPhoto();
        } else {
          displayScore();
          result.classList.remove('hidden');
          answerBtn.classList.remove('hidden');
          nextBtn.textContent = 'TRY AGAIN?';
          quizOver = true;
        }
      }
    } else {
      quizOver = false;
      nextBtn.textContent = 'NEXT QUESTION';
      result.classList.add('hidden');
      reset();
      hideScore();
      displayCurrentQuestion();
      displayPhoto();
    }
  });
});

// FUNCTIONALITY
// Display current question functionality
function displayCurrentQuestion() {
  // console.log('currently showing current question');

  let numChoices = questions[currentQuestion].choices.length;

  // Remove all current <li> elements if any
  choiceList.innerHTML = '';

  let choice;
  for (let i = 0; i < numChoices; i++) {
    choice = questions[currentQuestion].choices[i];
    let li = document.createElement('li');
    li.innerHTML =
      '<li><input type=radio value="' +
      i +
      '" name="dynradio" />' +
      choice +
      '</li>';
    choiceList.appendChild(li);
  }
}

// Display photo
const displayPhoto = function () {
  image.innerHTML = '';

  // let imageNumber = questions[currentQuestion].image.length;
  // console.log(questions[currentQuestion].image);

  let img = document.createElement('img');
  // img.innerHTML =
  //   '<img src="image/' + questions[currentQuestion].image + '.jpg"/>';

  img.src = 'image/' + questions[currentQuestion].image + '.jpg';
  image.appendChild(img);
};

// Display score functionality
const displayScore = function () {
  result.textContent = `🎊 You scored ${correctAnswers} out of ${questions.length} 👏🏻 🎊`;
  answerBtn.style.display = 'inline';
};

// Hide score functionality
const hideScore = function () {
  result.classList.add('.hidden');
};

// // Hide check answer functionality
// const hideAnswer = function () {
//   answerBtn.classList.add('.hidden');
// };

// Reset functionality
const reset = function () {
  currentQuestion = 0;
  correctAnswers = 0;
  hideScore();
};
