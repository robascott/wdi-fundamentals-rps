////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    
    if (playerMove==computerMove) {
        winner = "tie";
    } else {
        switch (playerMove) {
            case "rock":
                if (computerMove == "paper") {
                    winner = "computer";
                } else {  // computerMove = "scissors"
                    winner = "player";
                }
                break;
            case "paper":
                if (computerMove == "rock") {
                    winner = "player";
                } else {  // computerMove = "scissors"
                    winner = "computer";
                }
                break;
            case "scissors":
                if (computerMove == "rock") {
                    winner = "computer";
                } else {  // computerMove = "paper"
                    winner = "player";
                }
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    
    var playerMove;
    var computerMove;
    var winner;
    
    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove, computerMove);
        if (winner == "player") {
            playerWins++;
        } else if (winner == "computer") {
            computerWins++;
        }
        console.log('\n====================================================');
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        if (winner == "tie") {
            console.log('The result is a tie!' + '\n')
        } else {
            console.log('The ' + winner + ' wins!' + '\n')
        }
        
        console.log('Player wins: ' + playerWins);
        console.log('Computer wins: ' + computerWins);
        console.log('====================================================\n');
    }

    return [playerWins, computerWins];
}

function playTo(games) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;  
    var playerMove;
    var computerMove;
    var winner;
    
    while (playerWins < games && computerWins < games) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove, computerMove);
        if (winner == "player") {
            playerWins++;
        } else if (winner == "computer") {
            computerWins++;
        }
        console.log('\n====================================================');
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        if (winner == "tie") {
            console.log('The result is a tie!' + '\n')
        } else {
            console.log('The ' + winner + ' wins!' + '\n')
        }
        
        console.log('Player wins: ' + playerWins);
        console.log('Computer wins: ' + computerWins);
        console.log('====================================================\n');
    }

    return [playerWins, computerWins];
}

playTo(3)
