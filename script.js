let playerPoint = 0;
let computerPoint = 0;


function computerPlay(){
    let rndNmbr = Math.floor(Math.random()*3) ;
    let compuerChoices = ["rock", "paper","scissors"]
    return compuerChoices[rndNmbr];
}

function playRound(computerSelection, playerSelection){
    //let playerSelection = prompt("Make a choice!").toLowerCase();
    const lastRoundContainer = document.querySelector('.last-round');
    const lastRoundText = document.createElement('p');
    lastRoundContainer.appendChild(lastRoundText);



    if(playerSelection === computerSelection){
        console.log("Tie!");
        lastRoundText.textContent = 'Tie!';

    }
    else if(playerSelection === "rock" & computerSelection === "scissors" | 
        playerSelection === "paper" & computerSelection === "rock" | 
        playerSelection === "scissors" & computerSelection === "paper"){
        playerPoint++;
        document.getElementById('playerPoints').innerText = playerPoint;
        console.log("You won this round! You got " + playerSelection + " and computer got " + computerSelection);
        lastRoundText.textContent = "You won this round! You got " + playerSelection + " and computer got " + computerSelection;
        
    }

    else{
        console.log("You Lost this round! Computer got " + computerSelection + " and you got " + playerSelection);
        computerPoint++
        document.getElementById('computerPoints').innerText = computerPoint;
        lastRoundText.textContent = "You Lost this round! Computer got " + computerSelection + " and you got " + playerSelection;
    }

    if(checkWinner()){
        const playText = document.createElement('div')
        playText.textContent = 'Do you want to play again?'
        const question = document.querySelector('.question');

        question.appendChild(playText);

        document.querySelector('.buttons').disabled = true;

        computerPoint = 0;
        playerPoint = 0;
    }
    
}

function checkWinner(){
    if(playerPoint === 5 | computerPoint === 5){

        const again = document.createElement('button');
        again.textContent = 'Play Again!';
        const choices = document.querySelector('.choices');
        choices.appendChild(again);




        if(playerPoint === 5){

        //console.log("You won the game!")
        }
        else{
            
        //console.log("You lost the game!")
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







