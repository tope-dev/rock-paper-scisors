let playButton = document.querySelector('#playButton');

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
  if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
    alert('Incorrect input! Be sure to choose correct weapon!');
    playPlayer();
  } else {
    return playerSelection;
  }
}

function playVersusComputer() {
  const playerSelection = playPlayer();
  const computerSelection = playComputer();

  if ()
}


playButton.addEventListener('click', playVersusComputer);

