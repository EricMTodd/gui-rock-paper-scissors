let computerScore = 0;
let playerScore = 0;
let computerChoice;
let playerChoice;

// Events
const rockSelect = document.querySelector("#rock-button");
rockSelect.onclick = () => {
  playerChoice = "rock";
  getComputerChoice();
  console.log(`Computer chose ${computerChoice}`);
  console.log(`Player chose ${playerChoice}`);
  evaluateChoices();
};

const paperSelect = document.querySelector("#paper-button");
paperSelect.onclick = () => {
  playerChoice = "paper";
  getComputerChoice();
  console.log(`Computer chose ${computerChoice}`);
  console.log(`Player chose ${playerChoice}`);
  evaluateChoices();
};

const scissorsSelect = document.querySelector("#scissors-button");
scissorsSelect.onclick = () => {
  playerChoice = "scissors";
  getComputerChoice();
  console.log(`Computer chose ${computerChoice}`);
  console.log(`Player chose ${playerChoice}`);
  evaluateChoices();
};

// Functions
function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 0) {
    computerChoice = "rock";
  } else if (computerChoice == 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return (computerChoice = computerChoice);
}

function evaluateChoices() {
  if (playerChoice != computerChoice) {
    if (playerChoice == "rock" && computerChoice != "paper") {
      console.log("WIN");
      playerScore++;
      document.getElementById(
        "player-score"
      ).innerHTML = `Player Score: ${playerScore}`;
    } else if (playerChoice == "paper" && computerChoice != "scissors") {
      console.log("WIN");
      playerScore++;
      document.getElementById(
        "player-score"
      ).innerHTML = `Player Score: ${playerScore}`;
    } else if (playerChoice == "scissors" && computerChoice != "rock") {
      console.log("WIN");
      playerScore++;
      document.getElementById(
        "player-score"
      ).innerHTML = `Player Score: ${playerScore}`;
    } else {
      console.log("LOSE");
      computerScore++;
      document.getElementById(
        "computer-score"
      ).innerHTML = `Computer Score: ${computerScore}`;
    }
  } else {
    console.log("DRAW");
  }

  gameOver();
  return;
}

function gameOver() {
  if (computerScore > 4 || playerScore > 4) {
    console.log("GAME OVER");
    computerScore = computerScore;
    playerScore = playerScore;
  }
}

// DOM manipulation
