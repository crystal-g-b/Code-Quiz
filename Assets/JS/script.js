var startButtonEl = document.querySelector('#start');
var startOverButtonEl = document.querySelector('#startOver');
var timeElement = document.querySelector("#time");
var submitElement = document.querySelector("#submit");
var modalElement = document.querySelector(".initialModal");
var quizEl = document.querySelector("#quiz");
var correctAnswerEl = document.querySelector("#correctAnswer")
var questionEl = document.getElementById("#question");
var choicesEl = document.querySelector("#choices");

var timer;
var time= 0;
var currentQuestion = 0;
var score = 0;


//list all the questions, choices and answers
var questions = [
  {
    question : "What type of operator is the following? !=",
    options : [
      "Strict inequality operator",
      "Equality operator", 
      "Modulus operator",
      "Inequality operator"
    ],
    Answer : "Inequality operator"
  },
  {
    question : "Pick the correct Boolean values",
    options : [
      "Yes or No",
      "True or False", 
      "On or Off",
      "All of the above"
    ],
    Answer : "True or False"
  },
  {
    question : "An array is a special ____, which can hold more than one value at a time. Please fill in the blank.",
    options : [
      "Number",
      "Terminal", 
      "Variable",
      "Sting"
    ],
    Answer : "Variable"
  },
  {
    question : "You can access and array elemnet by referring to the ____? Please fill in the blank",
    options : [
      "Index number",
      "Z index", 
      "Console log",
      "class"
    ],
    Answer : "Index number"
  },
  {
    question : "What does JSON stand for?",
    options : [
      "Javascript Order Notation",
      "Javascript Object Notation", 
      "Javascript Object Notion",
      "Javascript operator Notation"
    ],
    Answer : "Javascript Object Notation"
  },
]

// The startGame function is called when the start button is clicked
function startGame() {
  startTimer();
  getQuestion();
}

function getQuestion() {
  questionEl.removeAttribute("class");
  var currentQuestion = questions;

  var questionEl = document.getElementById("#question");
  questionEl.textContent = currentQuestion.questionEl;

  choicesEl.innerHTML = "";
}

// The setTimer function starts and stops the timer when the game is over
function startTimer() {
    time = 30;
    document.querySelector("#time").innerHTML = time;

    timer = setInterval(function() {
      time--;
      timeElement.innerHTML = timer;
      if (timerCount <= 0) {
          clearInterval(timer);
          gameOver();
      }
    }, 1000);
  }

  function gameOver() {
    clearInterval(timer);
  }
  

  //Set up Modal
  submitElement.onclick = function() {
    modalElement.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// Attach event listener to start button to call startGame function on click
startButtonEl.addEventListener("click", startGame);

//Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);