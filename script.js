//create variable for DOM BUTTONS 
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

//create variable for Results 
const playerChoice = document.querySelector('#playerChoice');
const compChoice = document.querySelector('#compChoice');
const round = document.querySelector('#round');
const score = document.querySelector('#score');
const roundResult = document.querySelector('#roundResult');
const results = document.querySelector('#results');

//add event listener for DOM BUTTONS that calls singleRound Func
rockBtn.addEventListener('click', singleRound);
paperBtn.addEventListener('click', singleRound);
scissorsBtn.addEventListener('click',singleRound);

//define player score
let playerScore = 0;

//define computer score
let computerScore = 0;

//define round number
let roundNum = 0;


//Get Computer Choice Function
function getComputerChoice () {
    //give a random number from 0 - 8
    let num = Math.floor(Math.random() * 9);

    //if num is 0-2 return rock
    if (num <= 2) {
        return "Rock";
    } else if (num > 2 && num <= 5) {
        //if num is 3-5 return paper
        return "Paper";
    } else {
        //if num is 6-8 return scissors 
    return "Scissors";
    }
}

//Function that plays a single round of Rock Paper Scissors
function singleRound(e) {
    let playerSelection = e.target.textContent;
    let computerSelection = getComputerChoice();

    playerChoice.textContent = `You Chose ${playerSelection}`;
    compChoice.textContent = `Computer Chose ${computerSelection}`;

    if (playerSelection === "Rock" && computerSelection === "Rock" ||
        playerSelection === "Paper" && computerSelection === "Paper" ||
        playerSelection === "Scissors" && computerSelection === "Scissors") {
        roundResult.textContent = "TIE!! Play Again!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore += 1;
        roundNum += 1;
        roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        playerScore += 1;
        roundNum += 1;
        roundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    if (roundNum === 5) {
        if (computerScore > playerScore) {
            round.textContent = `Round ${roundNum}`;
            roundResult.textContent = 'GAME OVER COMPUTER WINS';
            score.textContent = `Score: ${computerScore} to ${playerScore}`;
        } else if (playerScore > computerScore) {
            round.textContent = `Round ${roundNum}`;
            roundResult.textContent = 'YOU WON!';
            score.textContent = `Score: ${playerScore} to ${computerScore}`;
        }
        playerScore = 0;
        computerScore = 0;
        roundNum = 0;
    } else {
        if (computerScore >= playerScore) {
            score.textContent = `Score: ${computerScore} to ${playerScore}`;
        } else {
            score.textContent = `Score: ${playerScore} to ${computerScore}`;
        }
        round.textContent = `Round ${roundNum}`;
    }
}





