const selectionButtons = document.querySelector('.container--buttons__selection');
const resultsTab = document.querySelector('.results__tab');
const resultsPlayer = document.querySelector('.results__tab--player');
const resultsComputer = document.querySelector('.results__tab--computer');
const announceTab = document.querySelector('.announce');

const rockButton = document.querySelector('#btn--rock');
const paperButton = document.querySelector('#btn--paper');
const scissorsButton = document.querySelector('#btn--scissors');

let playerOneScore = 0;
let computerScore = 0;
let currentGameCount = 0;
let playerSelection;
const setGameCount = 5;

rockButton.addEventListener("click", playRock);
paperButton.addEventListener("click", playPaper);
scissorsButton.addEventListener("click", playScissors);






//Generates random selection for computer
function playComputer() {
  const selectionArray = ["rock", "paper", "scissors"];
  //get random index value
  const randomIndex = Math.floor(Math.random() * selectionArray.length);
  //get random selection
  const selection = selectionArray[randomIndex];
  return selection;
}

//Asks player to choose it's selection
function playPlayer() {
  let playerSelection = prompt("Choose Rock, Paper, Scissors!").toLowerCase();
  if (
    playerSelection != "rock" &&
    playerSelection != "paper" &&
    playerSelection != "scissors"
  ) {
    alert("Incorrect input! Be sure to choose correct weapon!");
  } else {
    return playerSelection;
  }
}

function playRock() {
  playerSelection = 'rock';
  playVersusComputer();
}

function playPaper() {
  playerSelection = 'paper';
  playVersusComputer();
}

function playScissors() {
  playerSelection = 'scissors';
  playVersusComputer();
}

//Compares player selection against computers selection.
function playVersusComputer() {

  const computerSelection = playComputer(); //Starts playComputer Function and stores the value of computer's selection

  //Compares the player's and computer's selection and adds score to winner
  if (playerSelection === "scissors" && computerSelection === "paper") {
    playerOneScore++;
    console.log(`You Win! ${initialLetterUppercase(playerSelection)} beats ${initialLetterUppercase(computerSelection)}!`);
    announceTab.innerText = (`You Win! ${initialLetterUppercase(playerSelection)} beats ${initialLetterUppercase(computerSelection)}!`);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerOneScore++;
    console.log(`You Win! ${initialLetterUppercase(playerSelection)} beats ${initialLetterUppercase(computerSelection)}!`);
    announceTab.innerText = (`You Win! ${initialLetterUppercase(playerSelection)} beats ${initialLetterUppercase(computerSelection)}!`);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerOneScore++;
    console.log(`You Win! ${initialLetterUppercase(playerSelection)} beats ${initialLetterUppercase(computerSelection)}!`);
    announceTab.innerText = (`You Win! ${initialLetterUppercase(playerSelection)} beats ${initialLetterUppercase(computerSelection)}!`);
  } else if (playerSelection === computerSelection) {
    console.log("It's a tie! Try again!");
    announceTab.innerText = ("It's a tie! Try again!");
  } else {
    console.log(`You Lose! ${initialLetterUppercase(computerSelection)} beats ${initialLetterUppercase(playerSelection)}!`);
    announceTab.innerText = (`You Lose! ${initialLetterUppercase(computerSelection)} beats ${initialLetterUppercase(playerSelection)}!`);
    computerScore++;
  }

  //Converts any strings first letter to uppercase
  function initialLetterUppercase(s) {
    result = s[0].toUpperCase() + s.slice(1);
    return result;
  }


  //Outputs Score in console
  console.log(`Player1 Score: ${playerOneScore}`);
  console.log(`Computer Score: ${computerScore}`);

  // Outputs Score in HTML
  if (playerOneScore >= 5) {
    resultsPlayer.innerText = 'You win!';
    resultsComputer.innerText = '';
    playerOneScore = 0;
    computerScore = 0;
  } else if (computerScore >= 5) {
    resultsPlayer.innerText = 'You Lose!';
    resultsComputer.innerText = '';
    playerOneScore = 0;
    computerScore = 0;
  } else {
    resultsPlayer.innerText = `Player ${playerOneScore} : `;
    resultsComputer.innerText = `${computerScore} Computer`;
  }
}

// function playGame() {
//   const setGameCount = prompt('Choose the game length. Best of how many games?', 5);
  
//   currentGameCount = 0;
//   playerOneScore = 0;
//   computerScore = 0;
//   while (currentGameCount <= setGameCount) {
//     for (let i = currentGameCount; i <= setGameCount; i++) {
//       playVersusComputer();
//       currentGameCount = playerOneScore + computerScore + 1;
//     }
//     console.log(currentGameCount);
//   }
//   if (playerOneScore > computerScore) {
//     console.log('!!!!!!!!!!!!!!!!!!!!!!!!');
//     console.log(`You Win the Game of ${setGameCount}!!!`);
//     console.log('!!!!!!!!!!!!!!!!!!!!!!!!');
//   } else {
//     console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
//     console.log(`You Lost! Computer Wins the Game of ${setGameCount}!!!`);
//     console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
//   }
// }



