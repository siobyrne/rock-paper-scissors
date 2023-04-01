// Rock, Paper, Scissors Game


function getComputerChoice(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        // swap elements array [i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];

        }
        
        console.log(array[0]);  
        return array[0];
}

let choices = ['rock', 'paper', 'scissors'];

getComputerChoice(choices);



