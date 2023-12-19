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

    return result;
}

function rounds() {
    let playerWins = 0;

    for (let i = 0; i < 10; i++) {
        const computerChoice = getComputerChoice();
        const playerChoice = prompt("rock, paper, or scissor?").toLowerCase();
        const result = game(computerChoice, playerChoice);
        
        // Check if the player won and increment the counter
        if (result === "You won") {
            playerWins++;
        }
    }

    // Check if the player won at least three rounds
    if (playerWins >= 3) {
        alert("You won the game!");
    }
}

rounds();
