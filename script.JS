const playerName = document.getElementById('playerName');
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultState = document.getElementById('resultState');
const win = document.getElementById('win');
const lose = document.getElementById('lose');
const tie = document.getElementById('tie');
let choices = ["Rock", "Paper", "Scissors"];
let computerChoice;
let playerChoice;
let gameResult;
let winCount = 0;
let loseCount = 0;
let drawCount = 0;

let username = prompt("Hey! \nWelcome to Rock-Paper-Scissors game. \nPlease enter your name to start the game:");
while(!username) {
   username = prompt("Please enter a valid username");
}
playerName.textContent = username;

function playGame(playerChoice) {
    computerChoice = choices[Math.floor(Math.random() * 3)];

    switch(playerChoice){
        case 'Rock':
            gameResult = (computerChoice === 'Rock')? "Draw" : (computerChoice === 'Scissors')? "YOU WIN" : "YOU LOSE";
            break;
        case 'Paper':
            gameResult = (computerChoice === 'Paper')? "Draw" : (computerChoice === 'Rock')? "YOU WIN" : "YOU LOSE";
            break;
        case 'Scissors':
            gameResult = (computerChoice === 'Scissors')? "Draw" : (computerChoice === 'Paper')? "YOU WIN" : "YOU LOSE";
            break;
    }

    switch(playerChoice) {
    case 'Rock':
        playerDisplay.textContent = "✊"; 
        break;
    case 'Paper':
        playerDisplay.textContent = "✋";
        break;
    case 'Scissors':
        playerDisplay.textContent = "✌️";
        break;
 }
    switch(computerChoice) {
    case 'Rock':
        computerDisplay.textContent = "✊"; 
        break;
    case 'Paper':
    computerDisplay.textContent = "✋";
        break;
    case 'Scissors':
    computerDisplay.textContent = "✌️";
        break;
 }
 resultState.textContent = gameResult;
 resultState.classList.remove('winColor', 'loseColor', 'drawColor');
 switch(gameResult) {
    case 'YOU WIN':
        resultState.classList.add('winColor');
        winCount++;
        win.textContent = winCount;
        break;
    case 'YOU LOSE':
        resultState.classList.add('loseColor');
        loseCount++;
        lose.textContent = loseCount;
        break;
    case 'Draw':
        resultState.classList.add('drawColor');
        drawCount++;
        tie.textContent = drawCount;
        break;
 }
}


