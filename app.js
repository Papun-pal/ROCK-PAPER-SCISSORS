let userScore = 0;
let comScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let myScore = document.querySelector("#score-you");
let compScore = document.querySelector("#score-comp");
let button = document.querySelector("#checkbox");
let resetBtn = document.querySelector(".msg-rest")



resetBtn.addEventListener("click", () => {
    userScore = 0;
    comScore = 0;
    myScore.textContent = userScore;
    compScore.textContent = comScore;
    // myScore.style.backgroundColor = "rgba(0, 0, 0, 0.704)";
    // compScore.style.backgroundColor = "rgba(0, 0, 0, 0.704)";
    // msg.style.backgroundColor = "rgba(0, 0, 0, 0.704)";
    msg.innerText = "--play your tern--";


});


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const indx = Math.floor(Math.random() * 3);
    return options[indx];
};

let drawGame = () => {
    msg.innerText = "Game was draw.Play again.";
    msg.style.backgroundColor = "#7161EF";

};

let winGame = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        userScore++;
        myScore.innerText = userScore;

        msg.innerText = `You win!Your ${userChoice} beats ${compChoice}.`
        msg.style.backgroundColor = "green";
    } else {
        comScore++;
        compScore.innerText = comScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}.`
        msg.style.backgroundColor = "red";

    }

    // score colourning.
    if (userScore == comScore) {
        myScore.style.backgroundColor = "#7161EF";
        myScore.style.color = "white";

        compScore.style.backgroundColor = "#7161EF";
        compScore.style.color = "white";

    } else {
        if (userScore > comScore) {
            myScore.style.backgroundColor = "green";
            myScore.style.color = "white";

            compScore.style.backgroundColor = "red";
            compScore.style.color = "white";

        } else {
            myScore.style.backgroundColor = "red";
            myScore.style.color = "white";

            compScore.style.backgroundColor = "green";
            compScore.style.color = "white";

        }
    }

}


const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    console.log("user", userChoice);
    console.log("comp", compChoice);

    if (compChoice === userChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            if (compChoice === "paper") {
                userWin = false;
            } else {
                userWin = true;
            }
        } else if (userChoice === "paper") {
            if (compChoice === "scissors") {
                userWin = false;
            } else {
                userWin = true;
            }

        } else {
            if (compChoice === "rock") {
                userWin = false;
            } else {
                userWin = true;
            }

        }
        winGame(userWin, userChoice, compChoice);
    }

};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});


button.addEventListener("click", () => {
    if (button.checked) {
        document.body.classList.add("dark");

    }
    else {
        document.body.classList.remove("dark");
    }

});


