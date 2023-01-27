//#region Rock, Paper, Scissors Gameplay Functions

// This function generates a random number from 0 to 2 and uses that to access an element from the array
function getComputerChoice()
{
    var choice = Math.floor(Math.random() * 3);
    var choices = ["rock", "paper", "scissors"];

    return choices[choice];
}

// Takes the players input and the generated computer choice, returns a string with the result
function playRound(playerSelection, computerSelection)
{
    // Return a result depending on the player choice compared to the computer choice
    if (playerSelection == "rock")
    {
        if (computerSelection == "rock") return 0; /* "Draw - both players choose rock!" */
        else if (computerSelection == "paper") return 2; /* "Player Loses - Enemy choose paper!" */
        else return 1; /* "Player Wins - Enemy choose scissors!" */
    }
    else if (playerSelection == "paper")
    {
        if (computerSelection == "rock") return 1; /* "Player Wins - Enemy choose rock!"; */
        else if (computerSelection == "paper") return 0; /* "Draw - both players choose paper!"; */
        else return 2; /* "Player Loses - Enemy choose scissors"; */
    }
    else if (playerSelection == "scissors")
    {
        if (computerSelection == "rock") return 2; /* "Player Loses - Enemy choose rock!"; */
        else if (computerSelection == "paper") return 1; /* "Player Wins - Enemy choose paper!"; */
        else return 0; /* "Draw - both players choose scissors!"; */
    }
}

// Enables the Reset button and disables the game buttons
function gameOver()
{
    btnPaper.disabled = true;
    btnRock.disabled = true;
    btnScissors.disabled = true;
    btnReset.disabled = false;
}

// Enables the game buttons and disables the reset buttons,
// resets the score to 0
function gameReset()
{
    // Reset the score
    pScore = 0;
    cScore = 0;
    drawCounter = 0;
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    drawScore.textContent = drawCounter;

    // Reset the buttons
    btnPaper.disabled = false;
    btnRock.disabled = false;
    btnScissors.disabled = false;
    btnReset.disabled = true;

}

// Checks if a player has reached 5 points
function checkWinner()
{
    if (pScore >= 5)
    {
        alert("The Player is the WINNER!");
        gameOver();
    }
    else if (cScore >= 5)
    {
        alert("The Computer is the WINNER!");
        gameOver();
    }
}

// Increments the score and checks for winner
// <index> integer; used to determine which player's score is incremented
function game(index)
{
    if (index == 1) pScore++;
    else if (index == 2) cScore++;
    else drawCounter++;

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    drawScore.textContent = drawCounter;

    checkWinner();
}

//#endregion

//#region Getting Button Elements

const btnRock = document.getElementById('btnRock');
const btnPaper = document.getElementById('btnPaper');
const btnScissors = document.getElementById('btnScissors');
const btnReset = document.getElementById('btnReset');

//#endregion

//#region Score Variables

var pScore = 0;
var cScore = 0;
var drawCounter = 0;

//#endregion

//#region Getting Score Display Elements

let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let drawScore = document.getElementById('drawScore');

//#endregion

// Initaly sets the score and buttons
gameReset();

//#region Button Click Methods

btnRock.addEventListener('click', () => {
    game(playRound("rock", getComputerChoice()));
  });

btnPaper.addEventListener('click', () => {
    game(playRound("paper", getComputerChoice()));
});

btnScissors.addEventListener('click', () => {
    game(playRound("scissors", getComputerChoice()));
});

btnReset.addEventListener('click', () => {
    gameReset();
});

//#endregion