const playButton = document.querySelector("#playButton");

let playerOneScore = 0;
let computerScore = 0;

function playComputer() {
  const weaponsArray = ["rock", "paper", "scissors"];
  //get random index value
  const randomIndex = Math.floor(Math.random() * weaponsArray.length);
  //get random weapon
  const weapon = weaponsArray[randomIndex];
  return weapon;
}

function playPlayer() {
  let playerSelection = prompt("Choose Rock, Paper, Scissors!").toLowerCase();
  if (
    playerSelection != "rock" &&
    playerSelection != "paper" &&
    playerSelection != "scissors"
  ) {
    alert("Incorrect input! Be sure to choose correct weapon!");
    playPlayer();
  } else {
    return playerSelection;
  }
}

function playVersusComputer() {
  const playerSelection = playPlayer();
  const computerSelection = playComputer();

  if (playerSelection === "scissors" && computerSelection === "paper") {
    playerOneScore++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerOneScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerOneScore++;
  } else if (playerSelection === computerSelection) {
    console.log('It\s a tie! Try again!');
    playVersusComputer();
  } else {
    computerScore++;
  }

  console.log(`Player1 Score: ${playerOneScore}`);
  console.log(`Computer Score: ${computerScore}`);
}

playButton.addEventListener("click", playVersusComputer);
