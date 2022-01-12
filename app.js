//scoreboard
let computerScore = 0;
let playerScore = 0;
let tieScore = 0;
let output = ""
//computers pick
function computerPlay() {
    rockPaperScissors = Math.floor(Math.random() * 3) + 1;
    if (rockPaperScissors === 1) {
        return "Rock";
    }
    if (rockPaperScissors === 2) {
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerScore < 5 && computerScore < 5) {
        if(playerSelection === "rock" && computerSelection === "Paper"){
            computerScore += 1;
            return "You Lose! Paper beats Rock";
        }
        if(playerSelection === "paper" && computerSelection === "Scissors"){
            computerScore += 1;
            return "You Lose! Scissors beats Paper";
        }        
        if(playerSelection === "scissors" && computerSelection === "Rock"){
            computerScore += 1;
            return "You Lose! Rock beats Scissors";
        }        
        if(playerSelection === "rock" && computerSelection === "Scissors"){
            playerScore += 1;
            return "You Win! Rock beats Scissors";
        }
        if(playerSelection === "paper" && computerSelection === "Rock"){
            playerScore += 1;
            return "You Win! Paper beats Rock";
        }        
        if(playerSelection === "scissors" && computerSelection === "Paper"){
            playerScore += 1;
            return "You Win! Scissors beats Paper";
        }
        else{
            tieScore += 1;
            return "Its a Tie!";
        }        
    }
}

function gameOver() {
    if (playerScore === 5) {
        resetButton.classList.remove("hidden");
        return "Game Over. You beat the computer!";
    }
    if (computerScore === 5) {
        resetButton.classList.remove("hidden");
        return "Game Over. You lost to the computer!";
    }
}

const rpsButtons = document.querySelectorAll(".rpsButton");
rpsButtons.forEach(rpsButton => {
    rpsButton.addEventListener("click", (e) => {
        let comp = computerPlay();
        let play = rpsButton.id;
        document.getElementById("result").innerHTML = playRound(play, comp);
        document.getElementById("player").innerHTML = playerScore;
        document.getElementById("computer").innerHTML = computerScore;
        document.getElementById("tie").innerHTML = tieScore;
        if (playerScore > 4 || computerScore > 4){
            document.getElementById("result").innerHTML = gameOver();
        }
    })
})


//reset button
function reset() {
    computerScore = 0;
    playerScore = 0;
    tieScore = 0;
    document.getElementById("player").innerHTML = playerScore;
    document.getElementById("computer").innerHTML = computerScore;
    document.getElementById("tie").innerHTML = tieScore
    document.getElementById("result").innerHTML = "";
    resetButton.classList.add("hidden");
}

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset);

// function game() {
//     for (let i = 1; i <= 5; i++) {
//         let playerSelection = prompt("Rock Paper or Scissors").toLowerCase();
//         console.log(playRound(playerSelection, computerPlay()));
//     }
// }
