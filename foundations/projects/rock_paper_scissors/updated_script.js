// page
const buttons = ["Rock", "Paper", "Scissors"]
const body = document.body;
let newGameButton;
const buttonsRow = document.createElement("div");
body.appendChild(buttonsRow);
const resultsDiv = document.createElement("div");
resultsDiv.id = "results"
body.appendChild(resultsDiv);

buttons.forEach((buttonText) => {
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.classList.toggle("selection");
    button.addEventListener("click", () => playRound(buttonText));
    buttonsRow.appendChild(button);
})

// game
function getComputerChoice(){
    let min=1;
    let max=4;
    let ranNum = Math.floor(Math.random() * (max-min) + min);

    if (ranNum === 1){
        return "paper";
    } else if (ranNum === 2){
        return "scissors";
    } else {
        return "rock";
    }
}

let playerScore = 0;
let computerScore = 0;
let round = 1;

function playRound(playerInput) {
    let computerSelection = getComputerChoice();
    let playerSelection = playerInput.toLowerCase();

    if (computerSelection === playerSelection) {
        returnResult(playerInput, computerSelection, "It's a tie");
        gameCount();
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        playerScore++;
        returnResult(playerInput, computerSelection, `You win! ${playerInput} beats ${computerSelection}`);
        gameCount();
    } else {
        computerScore++;
        returnResult(playerInput, computerSelection, `You lose! ${computerSelection} beats ${playerInput}`);
        gameCount();
    }
}

function returnResult(playerInput, computerSelection, message){
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    
    h2.textContent = `Round ${round}`
    p1.textContent = `Player Selection: ${playerInput}`
    p2.textContent = `Computer Selection: ${computerSelection}`
    p3.textContent = message;

    resultsDiv.appendChild(h2);
    resultsDiv.appendChild(p1);
    resultsDiv.appendChild(p2);
    resultsDiv.appendChild(p3);
}

function gameCount(){
    round++;
    if (round>5){
        declareWinner();
        disableButtons();
        resetButton();
    }
}

function declareWinner(){
    const h1 = document.createElement("h1");
    if (computerScore>playerScore){
        h1.textContent = "You lose!"
    } else if (computerScore< playerScore){
        h1.textContent = "You win"
    } else {
        h1.textContent = "It's a tie. You both won the same number of rounds."
    }
    resultsDiv.appendChild(h1);
}

function disableButtons(){
    let buttons = Array.from(document.getElementsByClassName("selection"));
    buttons.forEach((button) => {
        button.disabled = !button.disabled;
    });
}

function resetButton(){
    rButton = document.createElement("button");
    rButton.textContent = "Start new game";
    resultsDiv.appendChild(rButton);
    rButton.addEventListener("click", () => {
        resetFunction();
    })
}

function resetFunction(){
    round = 1;
    computerScore = 0;
    playerScore = 0;
    disableButtons();
    while (resultsDiv.firstChild){
        resultsDiv.removeChild(resultsDiv.firstChild);
    };
}
