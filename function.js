function getComputerChoice()  {
    const list = ['paper', 'scissor', 'rock'];
    const randomIndex = Math.floor(Math.random() * list.length);
    const randomString = list[randomIndex];
    return randomString; 
};

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissor') {
        return "You Lose! scissor beats paper";
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
          return "You Win! paper beats rock";
    }

    if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'paper') {
        return "You Win! scissor beats paper";
    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'rock') {
        return "You Lose! rock beats scissor";
    };

    if (playerSelection.toLowerCase() === 'rock' && computerSelection=== 'paper') {
        return "You Lose! paper beats rock";
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissor') {
        return "You Win! rock beats scissor";
    };

    if (playerSelection.toLowerCase() === computerSelection) {
        return "Draw! Same choice";
    };
};

const outcome = {
    "You Lose! scissor beats paper": 0,
    "You Win! paper beats rock": 1,
    "You Win! scissor beats paper": 1,
    "You Lose! rock beats scissor": 0,
    "You Lose! paper beats rock": 0,
    "You Win! rock beats scissor": 1,
    "Draw! Same choice": 2
};

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

// // function keeps score from playRound game
// function game(playerChoice){
//     const computerSelection = getComputerChoice();
//     let winnerLoser = playRound(playerChoice, computerSelection);
//     console.log(winnerLoser);
//     if (outcome[winnerLoser] === 1){
//         playerScore += 1;
//     } if (outcome[winnerLoser] === 0){
//         computerScore += 1;
//     } 
//     console.log('You: ' + playerScore + '|' + 'Computer:' + computerScore );
// };

function gameScore(playerChoice){
    const computerSelection = getComputerChoice();
    let winnerLoser = playRound(playerChoice, computerSelection);
    if (outcome[winnerLoser] === 1){
        playerScore += 1;
    } if (outcome[winnerLoser] === 0){
        computerScore += 1;
    } if(outcome[winnerLoser] === 2){
        drawScore += 1;
    }

};

// combining click and calling both PlayRound and game function for each choice
document.getElementById('paper').addEventListener('click', () => {
    const playerChoice = 'paper';
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    gameScore(playerChoice);

    if (result === 'player') {
        playerScore++;
    } else if (result === 'computer') {
        computerScore++;
    } else if (result === 'draw') {
        drawGame++;
    }


    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('draw-score').textContent = drawScore;
});

document.getElementById('scissor').addEventListener('click', () => {
    const playerChoice = 'scissor';
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    gameScore(playerChoice);

    if (result === 'player') {
        playerScore++;
    } else if (result === 'computer') {
        computerScore++;
    } else if (result === 'draw') {
        drawGame++;
    }

    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('draw-score').textContent = drawScore;
});

document.getElementById('rock').addEventListener('click', () => {
    const playerChoice = 'rock';
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    gameScore(playerChoice);

    if (result === 'player') {
        playerScore++;
    } else if (result === 'computer') {
        computerScore++;
    } else if (result === 'draw') {
        drawGame++;
    }


    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('draw-score').textContent = drawScore;
});

// Get all score-container elements
const scoreContainers = document.querySelectorAll('.score-container');

// Set the display style of score-container to 'inline-block'
scoreContainers.forEach((container) => {
    container.style.display = 'inline-block';
});

