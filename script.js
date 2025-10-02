function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice(){
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
}

function playGame() {
let humanScore = 0;
let computerScore = 0;
let rounds = 5;

function playRound(humanChoice, computerChoice) {
   const humanInput = humanChoice.toLowerCase();
     if (humanInput === computerChoice) {
        console.log("It's a tie!");
    }else if((humanInput === 'rock' && computerChoice === 'scissors') ||
    (humanInput === 'paper' && computerChoice === 'rock') ||
    (humanInput === 'scissors' && computerChoice === 'paper')){
        console.log("You win this round!");
        humanScore++;
    }
    else {
        console.log("Computer wins this round!");
        computerScore++;
    }
    
    rounds++;
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

if(rounds === 5){
    if(humanScore > computerScore){
        console.log("You win the game!");
    }else if(computerScore > humanScore){
        console.log("Computer wins the game!");
    }else{
        console.log("The game is a tie!");
    }
 }
}