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

/**
 * Resets the score for the players and resets the number of moves to 5
 * @returns {object} Object with the null score for each field
 */
const reset = () => {
  return {
    userScore: 0,
    cpuScore: 0,
    moves: 5,
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
    } else {
      displayMsg("Computer won!");
      cpuScore++;
    }
  } else if (p1 === choices.ROCK) {
    if (p2 === choices.PAPER) {
      displayMsg("Computer won!");
      cpuScore++;
    } else {
      displayMsg("Player won!");
      userScore++;
    }
  } else if (p1 === choices.SCISSOR) {
    if (p2 === choices.PAPER) {
      displayMsg("Player won!");
      cpuScore++;
    } else {
      displayMsg("Computer won!");
      userScore++;
    }
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
      movesDOM.innerText = `Moves Left: ${moves--}`;

      // Get the computer choice
      const computerChoice = cpuChoice();

      // Get the player choice using the DOM innerText
      const playerChoice = opt.innerText.toLowerCase();
      console.log("CPU : ", computerChoice);
      console.log(`playerChoice: ${playerChoice}`);

      getWinner(playerChoice, computerChoice);
    });
  });
};

startGame();
