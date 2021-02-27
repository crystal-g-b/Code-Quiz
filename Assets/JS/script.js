var startButtonEl = document.querySelector('#start-btn');
var startOverButtonEl = document.querySelector('#startOver');

//list all the questions, choices and answers
var quiz = [
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
function startGame() {}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

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