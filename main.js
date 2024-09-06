function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

let humanScore = 0
let computerScore = 0
let result = ""
function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock") {
        switch (computerChoice) {
            case "rock":
                result = ("Its a Draw " + computerChoice + " draws with " + humanChoice)
                break;
            case "paper":
                result = ("You Lose " + computerChoice + " Beats " + humanChoice)
                computerScore += 1;
                break;
            case "scissors":
                result = ("You Win " + humanChoice + " Beats " + computerChoice)
                humanScore += 1
                break;
            default:
                break;
        }
    }
    if (humanChoice == "paper") {
        switch (computerChoice) {
            case "rock":
                result = ("You Win " + humanChoice + " Beats " + computerChoice)
                humanScore += 1
                break;
            case "paper":
                result = ("Its a Draw " + computerChoice + " draws with " + humanChoice)
                break;
            case "scissors":
                result = ("You Lose " + computerChoice + " Beats " + humanChoice)
                computerScore += 1;
                break;
            default:
                break;
        }

    }
    if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "rock":
                result = ("You Lose " + computerChoice + " Beats " + humanChoice)
                computerScore += 1;
                break;
            case "paper":
                result = ("You Win " + humanChoice + " Beats " + computerChoice)
                humanScore += 1
                break;
            case "scissors":
                result = ("Its a Draw " + computerChoice + " draws with " + humanChoice)
                break;
            default:
                break;
        }
    }
}



playerChoiceButton = document.querySelectorAll(".pc")
playerChoiceButton.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        humanChoicee = e.target.textContent.toLowerCase()

        function updatescores() {
            document.querySelector(".humanScore").textContent = "You: " + humanScore 
            document.querySelector(".computerScore").textContent = "AI: " + computerScore
            document.querySelector(".result").textContent = result
        }

        playRound(humanChoicee, getComputerChoice())

        if (humanScore == 5 && computerScore == 5) {
            result = "Its a Draw"
        } else if (humanScore == 5) {
            result = "You Win"
        } else if (computerScore == 5) {
            result = "You Lose"

        }

        if (humanScore >= 5 || computerScore >= 5) {
            updatescores()
            humanScore = 0
            computerScore = 0
        } else {
            updatescores()
        }



    })
})