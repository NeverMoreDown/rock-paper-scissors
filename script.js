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
    //give a random number from 0 - 9
    let num = Math.floor(Math.random() * 9);

    //if num is 0-2 return rock
    if (num <= 2) {
        return "Rock";
    } else if (num > 2 && num <= 5) {
        //if num is 3-5 return paper
        return "Paper";
    } else {
        //if num is 7-9 return scissors 
    return "Scissors";
    }
}

//Function that plays a single round of Rock Paper Scissors
function singleRound () {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    console.log(playerSelection);
    console.log(computerSelection);

    // if rock & rock result is Tie 
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log("TIE!! Play Again!");
        //run singleRound Function
        return singleRound();

    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        // if Rock & Paper, paper beats rock, player loses return result text
        computerScore += 1;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        //if Rock & Scissors, rock beats scissors, player wins return result 
        playerScore += 1;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);

    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        // if Paper & Paper result is Tie 
        console.log("TIE!! Play Again!");
        //run singleRound Function
        return singleRound();

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        //if Paper & Rock, paper beats rock, player wins return result 
        playerScore += 1;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        // if Rock & Paper, scissors beats paper, player loses return result text
        computerScore += 1;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);

    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        // if Scissors & Scissors result is Tie 
        console.log("TIE!! Play Again!");
        //run singleRound Function
        return singleRound();

    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        // if Scissors & Rock, rock beats scissors, player loses return result text
        computerScore += 1;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        //if Scissors & Paper, scissors beats paper, player wins return result 
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
        console.log(`Round ${i + 1}`);
        console.log(`Score: ${playerScore} to ${computerScore}`)
    }

    //if after 5 rounds the player score is higher than computer score you win
    if(playerScore > computerScore) {
        return "YOU WIN!!!"
    } else {
        // if the computer score is higher than the player score you lose 
        return "YOU LOSE..."
    }

}