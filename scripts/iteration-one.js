// Variables assignment
let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
gameLoop(computerChoice, playerChoice);

// Functions
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 0) {
    computerChoice = "rock";
  } else if (computerChoice == 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return (computerChoice = computerChoice);
}

function getPlayerChoice() {
  let playerChoice = "";
  playerChoice = prompt("Please type rock, paper or scissors.");
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice != null) {
    if (playerChoice == "rock") {
      return playerChoice;
    } else if (playerChoice == "paper") {
      return playerChoice;
    } else if (playerChoice == "scissors") {
      return playerChoice;
    } else {
      location.reload(true);
    }
  } else {
    location.reload(true);
  }
}

function gameLoop(computerChoice, playerChoice) {
  console.log(
    `computerChoice: ${computerChoice}, playerChoice: ${playerChoice}`
  );

  if (playerChoice != computerChoice) {
    if (playerChoice == "rock" && computerChoice != "paper") {
      console.log("WIN");
    } else if (playerChoice == "paper" && computerChoice != "scissors") {
      console.log("WIN");
    } else if (playerChoice == "scissors" && computerChoice != "rock") {
      console.log("WIN");
    } else {
      console.log("LOSE");
    }
  } else {
    console.log("DRAW");
  }

  return;
}
