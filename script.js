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
    return `you lost! ${cs} beats ${ps}`;
  else if (
    (ps === "rock" && cs === "scissors") ||
    (ps === "paper" && cs === "rock") ||
    (ps === "scissors" && cs === "paper")
  )
    return `you won! ${ps} beats ${cs}`;
  else return "draw";
}

const playerSelection = "ScissoRs";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


