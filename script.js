let player1Score = 0
let player2Score = 0
let player1Turn = true

const editNamesBtn = document.querySelector('.dice-container button:first-child');
const instructionsBtn = document.querySelector('.dice-container button:last-child');

const player1ScoreBox = document.getElementById('player-1-score')
const player2ScoreBox = document.getElementById('player-2-score')

const player1ScoreUpdate = document.getElementById('player-1-score-update')
const player2ScoreUpdate = document.getElementById('player-2-score-update')

const messageText = document.getElementById('message')

const rollBtn = document.getElementById('roll-btn')
const restartBtn = document.getElementById('restart-btn')

const scoreBox1 = document.getElementById('score-box-1')
const scoreBox2 = document.getElementById('score-box-2')


rollBtn.addEventListener('click',startGame);
restartBtn.addEventListener('click',startAgain);

const startBtn = document.getElementById('start-btn');
const player1NameInput = document.getElementById('player1Name');
const player2NameInput = document.getElementById('player2Name');

rollBtn.style.display = 'none';
function restartGame(){
    rollBtn.style.display = "none"
    restartBtn.style.display = "block"
}

function startGame() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let currentPlayer = player1Turn ? 1 : 2;
    let diceImage = document.getElementById(`diceImage${currentPlayer}`);
    let diceImageArray = ["img/dice1.png", "img/dice2.png", "img/dice3.png", "img/dice4.png", "img/dice5.png", "img/dice6.png"];
    diceImage.src = diceImageArray[randomNumber - 1];
    let rollDice = document.getElementById(`roll-dice${currentPlayer}`);
   
    rollDice.style.display='block';
    diceImage.style.display='none';
    
    setTimeout(()=>
    {

        if (player1Turn) {     
            rollDice.style.display='none';
            diceImage.style.display='block';
            player1Score += randomNumber;
            player1ScoreUpdate.textContent = player1Score;
            scoreBox1.classList.remove('active');
            scoreBox2.classList.add('active');
            messageText.textContent = "Player 2 Turn";
        } else {
            rollDice.style.display='none';
            diceImage.style.display='block';
            player2Score += randomNumber;
            player2ScoreUpdate.textContent = player2Score;  
            scoreBox2.classList.remove('active');
            scoreBox1.classList.add('active');
            messageText.textContent = "Player 1 Turn";
        }

        if (player1Score >= 30) {
            messageText.textContent = "Player 1 Won The Game";
            restartGame();
        } else if (player2Score >= 30) {
            messageText.textContent = "Player 2 Won The Game";
            restartGame();
        }
        
        player1Turn = !player1Turn;

    },2000)
   

    
}


function startAgain() {
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;

  
    document.getElementById('diceImage1').src = "img/dice1.png";
    document.getElementById('diceImage2').src = "img/dice1.png";

    player1ScoreUpdate.textContent = "0";
    player2ScoreUpdate.textContent = "0";

    messageText.textContent = "Player 1 Turn";

    rollBtn.style.display = "block";
    restartBtn.style.display = "none";
}


startBtn.addEventListener('click', () => {
       
        rollBtn.style.display = 'block';
        startBtn.style.display = 'none';
  
});



instructionsBtn.addEventListener('click', showInstructions);


function showInstructions() {
    const instructions = `
        Welcome to the Dice Challenge Game!

        Instructions:
        1. Player 1 starts the game.
        2. Click the "ROLL DICE" button to roll the dice and accumulate points.
        3. Each player takes turns rolling the dice.
        4. The score is determined by the sum of the numbers rolled.
        5. The first player to reach 30 points wins the game.
        6. Click the "RESTART" button to start a new game.

        Have fun and may the best player win!
    `;

    alert(instructions);
}