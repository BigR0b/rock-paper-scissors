//scoreboard
let computerScore = 0;
let playerScore = 0;
let tieScore = 0;
let output = ""
let pictureBoard = document.getElementById("pictureBoard");

//computers pick
function computerPlay() {
    rockPaperScissors = Math.floor(Math.random() * 3) + 1;
    if (rockPaperScissors === 1) {
        return "rock";
    }
    if (rockPaperScissors === 2) {
        return "paper";
    }
    else{
        return "scissors";
    }
}
// Scoreboard Pictures
function computerPicture(computerRPS){
    let computerPic = document.getElementById("computerPic");
    if (computerRPS === "rock") {
        computerPic.src = "images/rock.jpg";
        pictureBoard.appendChild(computerPic); 
    }
    if (computerRPS === "paper") {
        computerPic.src = "images/paper.jpg";
        pictureBoard.appendChild(computerPic); 
    }
    if (computerRPS === "scissors")  {
        computerPic.src = "images/scissors.jpg";
        pictureBoard.appendChild(computerPic); 
    }
}
function playerPicture(playerRPS){
    let playerPic = document.getElementById("playerPic");
    if (playerRPS === "rock") {
        playerPic.src = "images/rock.jpg";
        pictureBoard.appendChild(computerPic); 
    }
    if (playerRPS === "paper") {
        playerPic.src = "images/paper.jpg";
        pictureBoard.appendChild(computerPic); 
    }
    if (playerRPS === "scissors")  {
        playerPic.src = "images/scissors.jpg";
        pictureBoard.appendChild(computerPic); 
    }
}
//Game logic
function playRound(playerSelection, computerSelection) {
    if (playerScore < 5 && computerScore < 5) {
        if(playerSelection === "rock" && computerSelection === "paper"){
            computerScore += 1;
            return "You Lose! Paper beats Rock";
        }
        if(playerSelection === "paper" && computerSelection === "scissors"){
            computerScore += 1;
            return "You Lose! Scissors beats Paper";
        }        
        if(playerSelection === "scissors" && computerSelection === "rock"){
            computerScore += 1;
            return "You Lose! Rock beats Scissors";
        }        
        if(playerSelection === "rock" && computerSelection === "scissors"){
            playerScore += 1;
            return "You Win! Rock beats Scissors";
        }
        if(playerSelection === "paper" && computerSelection === "rock"){
            playerScore += 1;
            return "You Win! Paper beats Rock";
        }        
        if(playerSelection === "scissors" && computerSelection === "paper"){
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

//button click event listener
const rpsButtons = document.querySelectorAll(".rpsButton");
rpsButtons.forEach(rpsButton => {
    rpsButton.addEventListener("click", (e) => {
        let comp = computerPlay();
        let play = rpsButton.id;
        document.getElementById("result").innerHTML = playRound(play, comp);
        document.getElementById("player").innerHTML = playerScore;
        document.getElementById("computer").innerHTML = computerScore;
        document.getElementById("tie").innerHTML = tieScore;
        pictureBoard.classList.remove("hidden");
        computerPicture(comp);
        playerPicture(play);
        if (playerScore === 5 || computerScore === 5){
            document.getElementById("result").innerHTML = gameOver();
            document.getElementById("rpsButtonGroup").classList.add("disableClick");
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
    pictureBoard.classList.add("hidden");
    document.getElementById("rpsButtonGroup").classList.remove("disableClick");
}

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset);

// function game() {
//     for (let i = 1; i <= 5; i++) {
//         let playerSelection = prompt("Rock Paper or Scissors").toLowerCase();
//         console.log(playRound(playerSelection, computerPlay()));
//     }
// }
