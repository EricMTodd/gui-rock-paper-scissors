let round = 0;
let computerScore = 0;
let playerScore = 0;
let computerChoice;
let playerChoice;

function selectRock() {
  playerChoice = "rock";
  console.log(`playerChoice: ${playerChoice}`);
  getComputerChoice();
}

function selectPaper() {
  playerChoice = "paper";
  console.log(`playerChoice: ${playerChoice}`);
  getComputerChoice();
}

function selectScissors() {
  playerChoice = "scissors";
  console.log(`playerChoice: ${playerChoice}`);
  getComputerChoice();
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 0) {
    computerChoice = "rock";
  } else if (computerChoice == 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  console.log(`computerChoice: ${computerChoice}`);
  return (computerChoice = computerChoice);
}
