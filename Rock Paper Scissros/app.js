let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];


}
const drawGame = () => {

    msg.innerText = "Game Was Draw , Play Again";

    msg.style.backgroundColor = "#081b31";


}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = " You Win";
        msg.style.backgroundColor = " Green";

    }
    else {
        compScore++;
        compScorePara.innerText = compScore;

        msg.innerText = "You Lost";
        msg.style.backgroundColor = " Red";


    }
}
const playGame = (userChoice) => {

    // Generate computer Choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});