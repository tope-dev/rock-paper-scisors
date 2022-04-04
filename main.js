function computerPlay() {
  const weaponsArray = ['rock', 'paper', 'scissors'];
  //get random index value
  const randomIndex = Math.floor(Math.random() * weaponsArray.length);
  //get random weapon
  const weapon = weaponsArray[randomIndex];
  return weapon;
}

let computerWeapon = computerPlay();
console.log(computerWeapon);