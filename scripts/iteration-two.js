let computerScore = 0;
let playerScore = 0;
let computerChoice;
let playerChoice;

const rockSelect = document.querySelector("#rock-button");
rockSelect.onclick = () => {
  playerChoice = "rock";
  getComputerChoice();
  console.log(`Player chose ${playerChoice}`);
  console.log(`Computer chose ${computerChoice}`);
  evaluateChoices();
};

const paperSelect = document.querySelector("#paper-button");
paperSelect.onclick = () => {
  playerChoice = "paper";
  getComputerChoice();
  console.log(`Player chose ${playerChoice}`);
  console.log(`Computer chose ${computerChoice}`);
  evaluateChoices();
};

const scissorsSelect = document.querySelector("#scissors-button");
scissorsSelect.onclick = () => {
  playerChoice = "scissors";
  getComputerChoice();
  console.log(`Player chose ${playerChoice}`);
  console.log(`Computer chose ${computerChoice}`);
  evaluateChoices();
};

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
      console.log(
        `Computer Score: ${computerScore} | Player score: ${playerScore}`
      );
    } else if (playerChoice == "paper" && computerChoice != "scissors") {
      console.log("WIN");
      playerScore++;
      console.log(
        `Computer Score: ${computerScore} | Player score: ${playerScore}`
      );
    } else if (playerChoice == "scissors" && computerChoice != "rock") {
      console.log("WIN");
      playerScore++;
      console.log(
        `Computer Score: ${computerScore} | Player score: ${playerScore}`
      );
    } else {
      console.log("LOSE");
      computerScore++;
      console.log(
        `Computer Score: ${computerScore} | Player score: ${playerScore}`
      );
    }
  } else {
    console.log("DRAW");
    console.log(
      `Computer Score: ${computerScore} | Player score: ${playerScore}`
    );
  }

  gameOver();
  return;
}

function gameOver() {
  if (computerScore > 4 || playerScore > 4) {
    console.log("GAME OVER");
  }
}
