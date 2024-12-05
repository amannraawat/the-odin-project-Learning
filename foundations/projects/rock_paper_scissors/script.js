function getComputerChoice(){
    let min=1;
    let max=4;
    let ranNum = Math.floor(Math.random() * (max-min) + min);

    if (ranNum === 1){
        return "paper";
    } else if (ranNum === 2){
        return "scissor"
    } else {
        return "rock"
    }
}

function getHumanChoice(){
    let input = prompt("Enter one: 'rock', 'paper', 'scissor'???");
    return input;
}

function playRound(humanChoice, computerChoice){
    let human = humanChoice.toLowerCase().trim();

    if (human === computerChoice){
        return "draw";
    } else if (
        (human === "rock" && computerChoice === "scissor") ||
        (human === "scissor" && computerChoice === "paper") ||
        (human === "paper" && computerChoice === "rock")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i=1; i<6; i++){
        console.log(`Round ${i}`);

        const humanSelection = getHumanChoice();
        const ComputerSelection = getComputerChoice();
        console.log(`Human Choice: ${humanSelection}`);
        console.log(`Computer Choice: ${ComputerSelection}`);

        const result = playRound(humanSelection, ComputerSelection);

        if (result === "win"){
            console.log("You win this round");
            humanScore++;
        } else if (result === "lose"){
            console.log("You lose this round");
            computerScore++;
        } else {
            console.log("This round is a draw");
        }

        console.log(`Current Score is Player: ${humanScore} and Computer: ${computerScore}`);
    }

    console.log(`Total Score is Player: ${humanScore} and Computer: ${computerScore}`);

    if (humanScore > computerScore){
        console.log("Hurrah! You win the game");
    } else if (humanScore < computerScore){
        console.log("Alas! You lose the game");
    } else {
        console.log("It's a tie")
    }
}

playGame();
