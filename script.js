let playerPoint = 0;
let computerPoint = 0;


function computerPlay(){
    let rndNmbr = Math.floor(Math.random()*3) ;
    let compuerChoices = ["rock", "paper","scissors"]
    return compuerChoices[rndNmbr];
}

function playRound(computerSelection, playerSelection){
    //let playerSelection = prompt("Make a choice!").toLowerCase();


    if(playerSelection === computerSelection)
        console.log("Tie!");
    else if(playerSelection === "rock" & computerSelection === "scissors" | 
        playerSelection === "paper" & computerSelection === "rock" | 
        playerSelection === "scissors" & computerSelection === "paper"){
        playerPoint++;
        console.log("You won this round! You got " + playerSelection + " and computer got " + computerSelection);
    }

    else{
        console.log("You Lost this round! Computer got " + computerSelection + " and you got " + playerSelection);
        computerPoint++
    }

    if(checkWinner()){
        let playAgain = prompt("Do you want to play again? y/n")
        if(playAgain === "y")
        playRound(computerPlay());
        computerPoint = 0;
        playerPoint = 0;
    }
    
}

function checkWinner(){
    if(playerPoint === 5 | computerPoint === 5){
        if(playerPoint ===5){
        console.log("You won the game!")
        }
        else{
        console.log("You lost the game!")
        }
    return true;
    }
}


function game(playerSelection){

    playRound(computerPlay(), playerSelection);
    //console.log("rock")
}


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(!e.target.id) return;
        game(e.target.id)
        //console.log(e.target.id);
    });
});


//game();







