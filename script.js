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

    // player selection is the text content of the button clicked
    let playerSelection = e.target.textContent;
    
    // computer selection is equal to return val of getComputer Choice Function 
    let computerSelection = getComputerChoice();

    // display in the two lists what the player chose and what the computer chose 
    playerChoice.textContent = `You Chose ${playerSelection}`;
    compChoice.textContent = `Computer Chose ${computerSelection}`;

    /*check result to see if player selection is equal to Computer choice 
    and give the round result li text content a tie result */

    if (playerSelection === "Rock" && computerSelection === "Rock" ||
        playerSelection === "Paper" && computerSelection === "Paper" ||
        playerSelection === "Scissors" && computerSelection === "Scissors") {

        roundResult.textContent = "TIE!! Play Again!";

    } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
            //if computer choice beats player choice 

            //add to computers overall score 
        computerScore += 1; 

        //add to round number 
        roundNum += 1;
        
        //display roundResult li text content that player loses round
        roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        //if player choice beats computer choice 
        
        //add to player score 
        playerScore += 1;

        //add to round number 
        roundNum += 1;
        
        //round Result li text content displays that player wins round 
        roundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    }

        //check to see if the current round is 5, we are playing best out of 5
    if (roundNum === 5) {
        //if round is 5 and current computer score is greater than player score GAME OVER
        if (computerScore > playerScore) {
            // show round 5, GAME OVER RESULT, and FINAL SCORE 
            round.textContent = `Round ${roundNum}`;
            roundResult.textContent = 'GAME OVER COMPUTER WINS';
            score.textContent = `Score: ${computerScore} to ${playerScore}`;

        } else if (playerScore > computerScore) {
        //if round is 5 and current player score is greater than computer score YOU WIN
            // show round 5, YOU WIN RESULT, and FINAL SCORE
            round.textContent = `Round ${roundNum}`;
            roundResult.textContent = 'YOU WON!';
            score.textContent = `Score: ${playerScore} to ${computerScore}`;
        }

        //reset scores and the current round number back to zero since game is over 
        playerScore = 0;
        computerScore = 0;
        roundNum = 0;

    } else {
        //if the current round isn't 5
        if (computerScore >= playerScore) {
            //show the score of computer to player if computer is currently winning 
            score.textContent = `Score: ${computerScore} to ${playerScore}`;
        } else {
            //show the score of player to computer if player is currently winning;
            score.textContent = `Score: ${playerScore} to ${computerScore}`;
        }
        // show the current round number 
        round.textContent = `Round ${roundNum}`;
    }
}