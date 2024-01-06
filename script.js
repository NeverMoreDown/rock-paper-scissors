//Get Player Choice
function getPlayerChoice () {
    //prompt user to select rock paper or scissors 
   let userChoice = prompt('Type Rock, Paper, or Scissors');

   //allow user to type answer in any case 
   //and return it with only first char uppercase 

   let choice = userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase();
   return choice; 

}

//Get Computer Choice Function
function getComputerChoice () {
    //give a random number from 0 - 9
    let num = Math.floor(Math.random() * 9);
    //check num
    console.log(num);

    //if num is 0-2 return rock
    if (num <= 2) {
        return "rock";
    } else if (num > 2 && num <= 5) {
        //if num is 3-5 return paper
        return "paper";
    } else {
        //if num is 7-9 return scissors 
    return "scissors";
    }
}

//Function that plays a single round of Rock Paper Scissors
function singleRound () {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    // if rock & rock result is Tie 
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log("TIE!! Play Again!");
        //run singleRound Function
        singleRound();

    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        // if Rock & Paper, paper beats rock, player loses return result text
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        //if Rock & Scissors, rock beats scissors, player wins return result 
        return `You Win! ${playerSelection} beats ${computerSelection}`;

    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        // if Paper & Paper result is Tie 
        console.log("TIE!! Play Again!");
        //run singleRound Function
        singleRound();

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        //if Paper & Rock, paper beats rock, player wins return result 
        return `You Win! ${playerSelection} beats ${computerSelection}`;

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        // if Rock & Paper, scissors beats paper, player loses return result text
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        // if Scissors & Scissors result is Tie 
        console.log("TIE!! Play Again!");
        //run singleRound Function
        singleRound();

    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        // if Scissors & Rock, rock beats scissors, player loses return result text
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        //if Scissors & Paper, scissors beats paper, player wins return result 
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}