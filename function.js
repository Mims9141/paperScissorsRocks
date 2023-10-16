const list = ['paper', 'scissor', 'rock'];

function getComputerChoice()  {
    const randomIndex = Math.floor(Math.random() * list.length);
    const randomString = list[randomIndex];
    return randomString; 
};

// const ruleOne ={
//     'rock': 0,
//     'paper': 1
// }
// const ruleTwo = {
//     'scissor': 0
//     'rock': 1
// }
// const ruleThree = {
//     'paper': 0,
//     'scissor': 1
// }

// const rule = [ruleOne, ruleTwo, ruleThree]



function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissor') {
        return "You Lose! scissor beats paper"
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
          return "You Win! paper beats rock"
    }

    if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'paper') {
        return "You Win! scissor beats paper"
    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'rock') {
        return "You Loose! rock beats scissor"
    };

    if (playerSelection.toLowerCase() === 'rock' && computerSelection=== 'paper') {
        return "You Loose! paper beats rock"
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissor') {
        return "You Win! rock beats scissor"
    };

    if (playerSelection.toLowerCase() === computerSelection) {
        return "Draw! Same choice"
    };
};

const outcome = {
    "You Lose! scissor beats paper": 0,
    "You Win! paper beats rock": 1,
    "You Win! scissor beats paper": 1,
    "You Loose! rock beats scissor": 0,
    "You Loose! paper beats rock": 0,
    "You Win! rock beats scissor": 1,
    "Draw! Same choice": 2
};

let playerScore = 0;
let computerScore = 0;

function game(){
    const playerSelection = prompt("Your choice: ");
    const computerSelection = getComputerChoice();
    let winnerLoser = playRound(playerSelection, computerSelection);
    console.log(winnerLoser);
    if (outcome[winnerLoser] === 1){
        playerScore += 1;
    } else if (outcome[winnerLoser] === 0){
        computerScore += 1;
    }; 
    console.log('You: ' + playerScore + '|' + 'Computer:' + computerScore );

}

game()
game()
game()
game()
game()
game()
game()