/**
 * @file    JS File for the Rock Paper Scissor game
 */

/**
 * @description
 */

// Enum choices
const choices = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSOR: "scissor",
};

const NUMBER_OF_ROUDS = 5;

/**
 * Resets the score for the players and resets the number of moves to 5
 * @returns {object} Object with the null score for each field
 */
const reset = () => {
  return {
    userScore: 0,
    cpuScore: 0,
    moves: 0,
  };
};

var { userScore, cpuScore, moves } = reset();

const getButtons = () => {
  const buttonClasses = Object.values(choices);
  var buttons = [];
  buttonClasses.forEach((btn) => {
    buttons.push(document.querySelector(`.${btn}`));
  });
  return buttons;
};

/**
 *
 * @returns {string} CPU choice of Rock, Paper or Scissor
 */
const cpuChoice = () => {
  const rand = Math.floor(Math.random() * 3);
  return Object.values(choices)[rand];
};

/**
 * @description     Displays result message
 * @param {string} msg
 */
const displayMsg = (msg) => {
  const result = document.querySelector(".result-msg");
  result.textContent = msg;
};

/**
 *
 * @param {string} scoreClass
 * @param {number} score
 */
const incrementScore = (scoreClass, score) => {
  const scoreBoard = document.querySelector(`.${scoreClass}`);
  scoreBoard.textContent = score;
};

/**
 *
 * @param {string} p1 Player choice of Rock, Paper and Scissor
 * @param {string} p2 CPU choice of Rock, Paper and Scissor
 */
const getWinner = (p1, p2) => {
  if (p1 === p2) {
    displayMsg("It's a tie");
  } else if (p1 === choices.PAPER) {
    if (p2 === choices.ROCK) {
      displayMsg("Player won!");
      userScore++;
      incrementScore("player-score", userScore);
    } else {
      displayMsg("Computer won!");
      cpuScore++;
      incrementScore("cpu-score", cpuScore);
    }
  } else if (p1 === choices.ROCK) {
    if (p2 === choices.PAPER) {
      displayMsg("Computer won!");
      cpuScore++;
      incrementScore("cpu-score", cpuScore);
    } else {
      displayMsg("Player won!");
      userScore++;
      incrementScore("player-score", userScore);
    }
  } else if (p1 === choices.SCISSOR) {
    if (p2 === choices.PAPER) {
      displayMsg("Player won!");
      userScore++;
      incrementScore("player-score", userScore);
    } else {
      displayMsg("Computer won!");
      cpuScore++;
      incrementScore("cpu-score", cpuScore);
    }
  }
};

const gameOver = () => {
  // Hide all the buttons
  const btnChoices = document.querySelector(".choices");
  btnChoices.classList.toggle("d-none");

  // Show the reload button
  const reloadBtn = document.querySelector(".reload");
  reloadBtn.classList.toggle("d-none");

  // Add event listener to reload btn
  reloadBtn.addEventListener("click", () => {
    window.location.reload();
  });

  // Check the winner
  if (userScore < cpuScore) {
    displayMsg("You lost the game!");
  } else if (userScore > cpuScore) {
    displayMsg("You won the game!");
  } else {
    displayMsg("Nobody won, it's a tie!");
  }
};

/**
 * @description     Start/Reset the game
 */
const startGame = () => {
  const options = getButtons();
  options.forEach((opt) => {
    // Add a event listener for each option
    opt.addEventListener("click", () => {
      // Decrease the number of moves
      movesDOM = document.querySelector(".moves");
      moves++;
      movesDOM.innerText = `Moves Left: ${5 - moves}`;

      // Get the computer choice
      const computerChoice = cpuChoice();

      // Get the player choice using the DOM innerText
      const playerChoice = opt.innerText.toLowerCase();

      getWinner(playerChoice, computerChoice);

      if (moves === NUMBER_OF_ROUDS) {
        gameOver();
      }
    });
  });
};

startGame();
