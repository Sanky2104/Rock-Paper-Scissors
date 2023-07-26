let player = 0;
let computer = 0;

document.addEventListener('DOMContentLoaded', () => {

    let name = document.getElementById('name');
    let play = document.querySelector('#play');
    name.onkeyup = () => {
        if(name.value.length > 0) {
            play.disabled = false;
        }
        else {
            play.disabled = true;
        }
    }

    document.getElementById('play').onclick = (event) => {
        event.preventDefault();
        document.getElementById('playarea').style.display = "block";

        document.querySelector('#playerScore').innerHTML = "Player Score: " + player;
        document.querySelector('#computerScore').innerHTML = "Computer Score: " + computer;

        document.getElementById('rock').addEventListener('click', () => {
            playRound('rock');
        });
        document.getElementById('paper').addEventListener('click', () => {
            playRound('paper');
        });
        document.getElementById('scissors').addEventListener('click', () => {
            playRound('scissors');
        });
    }

    /*if(player === 10) {
        //document.getElementById('playarea').style.display = "none";
        showAlert(name.autocapitalize);
    }
    else if (computer === 10) {
        //document.getElementById('playarea').style.display = "none";
        showAlert('Computer');
    }*/

})

function new_move() {
    const num = Math.floor(Math.random() * 3) + 1;
    switch(num) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";  
    }
}

function playRound(playerMove) {

    let computerMove = new_move();

    if(playerMove === 'rock') {
        if(computerMove === 'paper') {
            computer++;
        }
        else if (computerMove === 'scissors') {
            player++;
        }
    }

    else if(playerMove === 'paper') {
        if(computerMove === 'rock') {
            player++;
        }
        else if(computerMove === 'scissors') {
            computer++;
        }
    }
    else {
        if(computerMove === 'rock') {
            computer++;
        }
        else if(computerMove === 'paper') {
            player++;
        }
    }
    document.querySelector('#playerScore').innerHTML = "Player Score: " + player;
    document.querySelector('#computerScore').innerHTML = "Computer Score: " + computer;

    if(player === 10) {
        document.getElementById('playarea').style.display = "none";
        showAlert('You');
    }
    else if (computer === 10) {
        document.getElementById('playarea').style.display = "none";
        showAlert('Computer');
    }
}

function showAlert(name) {
    alert(name + "won !!!");
}