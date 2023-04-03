// Rock, Paper, Scissors Game
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        // swap elements array [i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];

        }
         
        return (array[0]);
}

getComputerChoice(choices);

function playRound(playerChoice, computerChoice){

   // let computerChoice = getComputerChoice().toLowerCase();
   // let playerChoice = playerChoice.toLowerCase();

    if (computerChoice === playerChoice){
    return "Tie game!"; 
    }

    else if (computerChoice === 'rock' && playerChoice === 'paper'){
    return "You win!";
    }

    else if (computerChoice === 'paper' && playerChoice === 'rock'){
        return "Computer wins!";
    }
}

const playerChoice = 'rock';
const computerChoice = getComputerChoice(choices);
console.log(playRound(playerChoice, computerChoice));
