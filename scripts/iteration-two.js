let computerScore = 0;
let playerScore = 0;
let computerChoice;
let playerChoice;

// Events
const rockSelect = document.querySelector("#rock-button");
rockSelect.onclick = () => {
  playerChoice = "rock";
  document.getElementById(
    "player-choice"
  ).innerHTML = `Your choice: ${playerChoice}`;
  getComputerChoice();
  evaluateChoices();
};

const paperSelect = document.querySelector("#paper-button");
paperSelect.onclick = () => {
  playerChoice = "paper";
  document.getElementById(
    "player-choice"
  ).innerHTML = `Your choice: ${playerChoice}`;
  getComputerChoice();
  evaluateChoices();
};

const scissorsSelect = document.querySelector("#scissors-button");
scissorsSelect.onclick = () => {
  playerChoice = "scissors";
  document.getElementById(
    "player-choice"
  ).innerHTML = `Your choice: ${playerChoice}`;
  getComputerChoice();
  evaluateChoices();
};

// Functions
function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
  let computerChoiceHtml = document.getElementById("computer-choice");

  if (computerChoice == 0) {
    computerChoice = "rock";
    computerChoiceHtml.innerHTML = `Computer's choice: ${computerChoice}`;
  } else if (computerChoice == 1) {
    computerChoice = "paper";
    computerChoiceHtml.innerHTML = `Computer's choice: ${computerChoice}`;
  } else {
    computerChoice = "scissors";
    computerChoiceHtml.innerHTML = `Computer's choice: ${computerChoice}`;
  }

  return (computerChoice = computerChoice);
}

function evaluateChoices() {
  let results = document.getElementById("results");
  if (playerChoice != computerChoice) {
    if (playerChoice == "rock" && computerChoice != "paper") {
      results.innerHTML = `${"You've won this round!"}`;
      playerScore++;
      document.getElementById(
        "player-score"
      ).innerHTML = `Player Score: ${playerScore}`;
    } else if (playerChoice == "paper" && computerChoice != "scissors") {
      results.innerHTML = `${"You've won this round!"}`;

      playerScore++;
      document.getElementById(
        "player-score"
      ).innerHTML = `Player Score: ${playerScore}`;
    } else if (playerChoice == "scissors" && computerChoice != "rock") {
      results.innerHTML = `${"You've won this round!"}`;

      playerScore++;
      document.getElementById(
        "player-score"
      ).innerHTML = `Player Score: ${playerScore}`;
    } else {
      results.innerHTML = `${"You've lost this round..."}`;

      computerScore++;
      document.getElementById(
        "computer-score"
      ).innerHTML = `Computer Score: ${computerScore}`;
    }
  } else {
    results.innerHTML = `${"It's a draw, try again."}`;
  }

  gameOver();
  return;
}

function gameOver() {
  let gameplayButtons = document.getElementById("gameplay-buttons");
  let playAgainButton = document.getElementById("play-again-button");
  if (computerScore > 4 || playerScore > 4) {
    console.log("GAME OVER");
    gameplayButtons.style.display = "none";
    playAgainButton.style.display = "block";
  }
}
