function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    uc = prompt("Pick rock, paper or scissors")
    return uc.toLowerCase();
}


function playGame() {
    let humanScore = 0
    let computerScore = 0
    function playRound(humanChoice, computerChoice) {

        if (humanChoice == "rock") {
            switch (computerChoice) {
                case "rock":
                    console.log("Its a Draw " + computerChoice + " draws with " + humanChoice)
                    break;
                case "paper":
                    console.log("You Lose " + computerChoice + " Beats " + humanChoice)
                    computerScore += 1;
                    break;
                case "scissors":
                    console.log("You Win " + humanChoice + " Beats " + computerChoice)
                    humanScore += 1
                    break;
                default:
                    break;
            }
        }
        if (humanChoice == "paper") {
            switch (computerChoice) {
                case "rock":
                    console.log("You Win " + humanChoice + " Beats " + computerChoice)
                    humanScore += 1
                    break;
                case "paper":
                    console.log("Its a Draw " + computerChoice + " draws with " + humanChoice)
                    break;
                case "scissors":
                    console.log("You Lose " + computerChoice + " Beats " + humanChoice)
                    computerScore += 1;
                    break;
                default:
                    break;
            }

        }
        if (humanChoice == "scissors") {
            switch (computerChoice) {
                case "rock":
                    console.log("You Lose " + computerChoice + " Beats " + humanChoice)
                    computerScore += 1;
                    break;
                case "paper":
                    console.log("You Win " + humanChoice + " Beats " + computerChoice)
                    humanScore += 1
                    break;
                case "scissors":
                    console.log("Its a Draw " + computerChoice + " draws with " + humanChoice)
                    break;
                default:
                    break;
            }
        }
    }
    for (let x = 0; x < 5; x++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    if (humanScore > computerScore) {
        console.log("You Win")
    }else if (computerScore > humanScore) {
        console.log("You Lose")
    }else {
        console.log("It's a Draw")
    }
}

playGame()