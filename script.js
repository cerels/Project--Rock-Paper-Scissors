// Choice is one of:
//     - "rock"
//     - "paper"
//     - "scissors"
// interp. the rock-paper-scissors choice

// void -> String
// produces a string: rock, paper or scissor at random

function getComputerChoice() {
  const RPS = ["rock", "paper", "scissors"];
  let num = getRandomNumberBetween(0, 2);
  return RPS[num];
}

// Float Float -> Float
// consume min and max number and produces a random int number within the min/max range

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// String String -> String
// consumes user and computer RPS choice and tells user if they won, lost, or tied

function playRound(playerSelection, computerSelection) {
  let ps = playerSelection.toLowerCase();
  let cs = computerSelection;
  if (
    (ps === "rock" && cs === "paper") ||
    (ps === "paper" && cs === "scissors") ||
    (ps === "scissors" && cs === "rock")
  )
    return 'lose';
  else if (
    (ps === "rock" && cs === "scissors") ||
    (ps === "paper" && cs === "rock") ||
    (ps === "scissors" && cs === "paper")
  )
    return 'win';
  else return "draw";
}


function playGame() {
  let userScore = 0,
    pcScore = 0;

  const buttons = document.querySelectorAll('button');
  const results = document.getElementById('results');
  const score = document.createElement('p');
  const round = document.createElement('p');

  updateScore();
  results.appendChild(score);
  results.appendChild(round);

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const playerSelection = button.id;
      const computerSelection = getComputerChoice();

      let currentRound = playRound(playerSelection, computerSelection);

      if (currentRound === "win") {
        userScore += 1;
      } else if (currentRound === "lose") {
        pcScore += 1;
      }

      updateScore();
      updateRound();

      if (userScore === 5) {
        endGame("You win!");
        userScore = 0;
        pcScore = 0;
      } else if (pcScore === 5) {
        endGame("You lose!");
        userScore = 0;
        pcScore = 0;
      }
      

      function updateRound() {
        round.textContent = `${playerSelection} vs ${computerSelection}, you ${currentRound}`;
      }

      function endGame(message) {
        round.textContent = message;
        buttons.forEach(button => {
          button.removeEventListener('click', () => { });
        });
      }

    });
    
  });
function updateScore() {
        score.textContent = `You: ${userScore} - CPU: ${pcScore}`;
      }

}


