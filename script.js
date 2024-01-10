//create variable for DOM BUTTONS 
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

//add event listener for DOM BUTTONS that calls singleRound Func
rockBtn.addEventListener('click', singleRound);
paperBtn.addEventListener('click',singleRound);
scissorsBtn.addEventListener('click',singleRound);

//define player score
let playerScore = 0;

//define computer score
let computerScore = 0;

//Get Player Choice
function getPlayerChoice () {
    //prompt user to select rock paper or scissors 
   let userChoice = prompt('Type Rock, Paper, or Scissors');

   //allow user to type answer in any case 
   //and return it with only first char uppercase 
   let choice = userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase();

   //check if choice is Rock Paper or Scissors if not get player choice again 
   if (choice === "Rock" || choice === "Paper" || choice == "Scissors") {
    return choice 
   } else {
    console.log("That was not an option, choose again")
    return getPlayerChoice();
   }

}

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
function singleRound () {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    console.log(playerSelection);
    console.log(computerSelection);

    // if rock & rock or paper & paper or scissors & scissors result is Tie 
    if (playerSelection === "Rock" && computerSelection === "Rock" 
    || playerSelection === "Paper" && computerSelection === "Paper"
    || playerSelection === "Scissors" && computerSelection === "Scissors") {
        console.log("TIE!! Play Again!");
        //run singleRound Function
        return singleRound();

    } else if (playerSelection === "Rock" && computerSelection === "Paper" 
    || playerSelection === "Paper" && computerSelection === "Scissors"
    || playerSelection === "Scissors" && computerSelection === "Rock") {
        // if Rock & Paper or Paper & Scissors or Scissors & Rock,  player loses return result text
        computerScore += 1;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);

    } else {
        //if Rock & Scissors or Paper & Rock or Scissors & Paper player wins return result 
        playerScore += 1;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);

    }
}

// game function that loops for 5 rounds 
function game () {
    //reset player score and computer score 
    playerScore = 0;
    computerScore = 0;

    //for loop that counts to five
    for( i = 0; i < 5; i++) {
        //call single round function 
        singleRound();
        //log current round
        console.log(`Round ${i + 1}`);
        //log current score for game
        console.log(`Score: ${playerScore} to ${computerScore}`)
    }

    //if after 5 rounds the player score is higher than computer score you win
    if(playerScore > computerScore) {
        return "YOU WIN THE GAME!!!"
    } else {
        // if the computer score is higher than the player score you lose 
        return "YOU LOSE THE GAME..."
    }

}