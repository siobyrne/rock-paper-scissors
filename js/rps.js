// Rock, Paper, Scissors Game
const choices = ['rock', 'paper', 'scissors'];
let buttons = document.querySelectorAll("button");
//let player = prompt('Paper, scissors, or rock?');
let computer = getComputerChoice(choices);
//const playerChoice = player.toLowerCase();
const computerChoice = computer.toLowerCase();

console.log(buttons);

function getComputerChoice(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        // swap elements array [i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];

        }
         
       return (array[0]);
      // `${array[i]}`
}

//getComputerChoice(choices);

function playRound(playerChoice, computerChoice){

    computerChoice = getComputerChoice(choices).toLowerCase();
    playerChoice = playerChoice.toLowerCase();

    console.log(computerChoice);
    console.log(playerChoice);

    if (computerChoice === playerChoice){
    console.log("Tie game!"); 
    }

    else if ((computerChoice == 'rock' && playerChoice == 'scissors') ||
    (computerChoice == 'paper' && playerChoice == 'rock') ||
    (computerChoice == 'scissors' && playerChoice == 'paper')){
        console.log("Computer wins");
    }

    else {
        console.log("You win");
    }
}
  


buttons.forEach((button) => {
    button.addEventListener('click', () => {
     const playerChoice = button.value;
     // playerChoice = choice.value.toLowerCase();

      console.log(playerChoice);
  
      playRound(playerChoice, computerChoice);
    });
  });



//function game(){
//    
//    for (let i = 0; i > 6; i++){
//
//        playRound(playerChoice, computerChoice); 
//    }
//
//    
//}