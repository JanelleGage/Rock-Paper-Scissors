const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => 
    possibleChoice.addEventListener("click", (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        getResult()
    }));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    switch(randomNumber) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Scissors"
            break;
        case 3:
            computerChoice = "Paper"
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult () {

    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === "Rock" && userChoice === "Paper") {
        result = "You Win!"
    }
    if (computerChoice === "Rock" && userChoice === "Scissors") {
        result = "You Lose!"
    }
    if (computerChoice === "Paper" && userChoice === "Scissors") {
        result = "You Win!"
    }
    if (computerChoice === "Paper" && userChoice === "Rock") {
        result = "You Lose!"
    }
    if (computerChoice === "Scissors" && userChoice === "Rock") {
        result = "You Win!"
    }
    if (computerChoice === "Scissors" && userChoice === "Paper") {
        result = "You Lose!"
    }

    resultDisplay.innerHTML = result
}
