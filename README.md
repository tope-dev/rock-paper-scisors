# rock-paper-scissors

Pseudocode:

-Show game modes with options - VS AI| 2-Players\

-Player has a choice between - Rock, paper, scissors and has to use prompt to type in the answer.
    *reads players input
    *returns the value

-AI generates a random choice (computerPlay)
   *chooses a random string from the array 
   *returns the value

-Compares the player and computer value, and depending who wins, stores the 
    *
    SWITCH
      1) CASE: (player1Weapon === 'scissors' && computerWeapon === 'paper') {
        playerScore++;
      }
      2) CASE: (player1Weapon === 'rock' && computerWeapon === 'scissors') {
        playerScore++;
      }
      3) CASE: (player1Weapon === 'paper' && computerWeapon === 'rock') {
        playerScore++;
      }
      4) CASE: (player1Weapon === computerWeapon) {
        console.log("It's a tie!")
      }
      5) DEFAULT {
        computerScore++;
      }

-console log the results and store the results/points in a variable.
-Game lasts till 5 wins










