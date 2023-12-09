function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return "Rock";
    } else if (rand === 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function game(computerSelection, playerSelection) {
    let result;

    if (
        (playerSelection === "rock" && computerSelection === "Scissor") ||
        (playerSelection === "paper" && computerSelection === "Rock") ||
        (playerSelection === "scissor" && computerSelection === "Paper")
    ) {
        result = "You won";
    } else if (
        (playerSelection === "scissor" && computerSelection === "Rock") ||
        (playerSelection === "rock" && computerSelection === "Paper") ||
        (playerSelection === "paper" && computerSelection === "Scissor")
    ) {
        result = "You lost";
    } else {
        result = "It's a tie";
    }

    alert(result);
    return result;
}

let result;
do {
    const computerChoice = getComputerChoice();
    const playerChoice = prompt("rock, paper, or scissor?").toLowerCase();
    result = game(computerChoice, playerChoice);
} while (result === "It's a tie");


