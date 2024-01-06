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
