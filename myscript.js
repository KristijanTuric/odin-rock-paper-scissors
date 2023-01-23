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
    // Normalizes the player input, ex. "RoCk" => "rock"
    var normalizedPlayer = playerSelection.toLowerCase();
    if (normalizedPlayer == "rock")
    {
        if (computerSelection == "rock") return "Draw - both players choose rock!";
        else if (computerSelection == "paper") return "Player Loses - Enemy choose paper!";
        else return "Player Wins - Enemy choose scissors!";
    }
    else if (normalizedPlayer == "paper")
    {
        if (computerSelection == "rock") return "Player Wins - Enemy choose rock!";
        else if (computerSelection == "paper") return "Draw - both players choose paper!";
        else return "Player Loses - Enemy choose scissors";
    }
    else if (normalizedPlayer == "scissors")
    {
        if (computerSelection == "rock") return "Player Loses - Enemy choose rock!";
        else if (computerSelection == "paper") return "Player Wins - Enemy choose paper!";
        else return "Draw - both players choose scissors!";
    }
    else return "We don't recongize that input.";
}

function game()
{
    var playerScore = 0;
    var computerScore = 0;
    for(let i = 0; i < 5; i++)
    {
        var playerInput = prompt("Enter Rock, Paper or Scissors to begin the game!");
        var roundResult = playRound(playerInput, getComputerChoice());
        console.log(roundResult);

        if (roundResult.includes("recongize")) return "The players input was not recongized, please reload the page...";

        if(roundResult.includes("Wins")) playerScore += 1;
        else if (roundResult.includes("Loses")) computerScore += 1;
    }

    if (playerScore > computerScore) return "The player WINS!";
    else if (playerScore == computerScore) return "It is a DRAW!";
    else return "The player LOST!";
}

console.log(game());