var startButtonEl = document.querySelector('#start');
var startOverButtonEl = document.querySelector('#startOver');
var timeElement = document.querySelector("#time");
var submitElement = document.querySelector("#submit");
var modalElement = document.querySelector("#initialModal");
var quizEl = document.querySelector("#quiz");
var correctAnswerEl = document.querySelector("#correctAnswer")
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var scoreEl = document.querySelector("#score");
var overEl = document.querySelector("#over");
var formEl = document.querySelector("form");
var endScreenEl =document.querySelector("#endScreen");

var timer;
var time = 10;
var currentQuestionIndex = 0;
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
  //timer = setInterval (stopClock, 1000);
  timer = setInterval (function(){
    console.log(time--)
    timeElement.textContent = time;
    if (time <= 0) {
      endGame();
    }
  },1000)
  timeElement.textContent = time;

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
    choiceButton.setAttribute("value" , choice);

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
    correctAnswerEl.style.fontSize = "100%";
  } else {
    correctAnswerEl.textContent = "Correct";
    correctAnswerEl.style.color = "green";
    correctAnswerEl.style.fontSize = "100%";
  }

  correctAnswerEl.setAttribute("class" , "correctAnswer");
  setTimeout(function() {
    correctAnswerEl.setAttribute("class" , "answer hide");
  }, 1000);

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    endGame();
  } else {
    getQuestion();
  }
}

function endGame() {
  clearInterval(timer);

//var scoreEl = document.querySelector("#score");
//var overEl = document.querySelector("#over");

  overEl.removeAttribute("class");

  quizEl.setAttribute("class" , "hide");

  scoreEl.removeAttribute("class");

  scoreEl.onclick();

  var finalScoreEl = document.querySelector("#final-score");
  finalScoreEl.textContent= score;
}

function stopClock() {
  time--;
  timeElement.textContent = time;

  if (time <= 0) {
    endGame();
  }
}

function handleInitials(event) {
  event.preventDefault();
  var initialEl = document.querySelector("#initials");
  var initials = initialEl.value;
  var playersEl = docucment.querySelector("#players");
  playersEl.appendChild(initials);
  modalElement.style.display = "none";
  endScreenEl.removeAttribute("class");
}
  
//var modalElement = document.querySelector(".initialModal");
//var scoreEl = document.querySelector("#score");
  //Set up Modal
  scoreEl.onclick = function() {
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

formEl.addEventListener("submit" , handleInitials);
