var startButtonEl = document.querySelector('#start');
var startOverButtonEl = document.querySelector('#startOver');
var timeElement = document.querySelector("#time");
var submitElement = document.querySelector("#submit");
var modalElement = document.querySelector(".initialModal");
var quizEl = document.querySelector("#quiz");
var correctAnswerEl = document.querySelector("#correctAnswer")
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var scoreEl = document.querySelector("#score");

var timer;
var time = 0;
var currentQuestionIndex = 0;
var score = 0;
var secondsLeft = 60;


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
    answer : "Inequality operator"
  },
  {
    question : "Pick the correct Boolean values",
    options : [
      "Yes or No",
      "True or False", 
      "On or Off",
      "All of the above"
    ],
    answer : "True or False"
  },
  {
    question : "An array is a special ____, which can hold more than one value at a time. Please fill in the blank.",
    options : [
      "Number",
      "Terminal", 
      "Variable",
      "Sting"
    ],
    answer : "Variable"
  },
  {
    question : "You can access and array elemnet by referring to the ____? Please fill in the blank",
    options : [
      "Index number",
      "Z index", 
      "Console log",
      "class"
    ],
    answer : "Index number"
  },
  {
    question : "What does JSON stand for?",
    options : [
      "Javascript Order Notation",
      "Javascript Object Notation", 
      "Javascript Object Notion",
      "Javascript operator Notation"
    ],
    answer : "Javascript Object Notation"
  },
]

// When the start button is clicked on the the timer will start
function startGame() {
  timer = setInterval(function() {
    time = 60;
    timeElement.innerHTML = time;

    //set conditions for when time runs out
    if (time <= 0) {
      clearInterval(timer);

      //set the end game function
      endGame();
    }
  }, 1000);

  var startQuizEl = document.querySelector("#start-quiz");
  startQuizEl.setAttribute("class", "hide");

  quizEl.removeAttribute("class");

  getQuestion();
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  //var questionEl = document.getElementById("#question");
  questionEl.textContent = currentQuestion.question;

  choicesEl.innerHTML="";

  currentQuestion.options.forEach(function(choice, i) {
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class" , "choice");
    choiceButton.setAttribute("value" , "choice");

    choiceButton.textContent = i + 1 + "." + choice;

    choiceButton.onclick = answerClick;

    choicesEl.appendChild(choiceButton);
  });
}

function answerClick() {
  if (this.value != questions[currentQuestionIndex].answer) {
    score -= 1;

    if (time < 0) {
      time = 0;
    }
    
    timeElement.textContent = time;
    correctAnswerEl.textContent = "Incorrect";
    correctAnswerEl.style.color = "red";
    correctAnswerEl.style.fontSize = "200%";
  }
}

function endGame() {
  clearInterval(timer);
  score.onclick();
}
  
//var modalElement = document.querySelector(".initialModal");
//var scoreEl = document.querySelector("#score");
  //Set up Modal
  score.onclick = function() {
    modalElement.style.display = "block";
  }
  var closeModalEl = document.querySelector("close");

  //closeModalEl.onclick = function() {
    //modalElement.style.display = "none";
  //}
  
  submitElement.onclick = function() {
    modalElement.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modalElement) {
      modalElement.style.display = "none";
    }
  }

// Attach event listener to start button to call startGame function on click
startButtonEl.addEventListener("click", startGame);

