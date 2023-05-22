// /*
//   Rock Paper Scissors 🚀🔥
//   Concepts covered in this project
//     👉 For loops
//     👉 Dom Manipulation
//     👉 Variables
//     👉 Conditionals (if else if)
//     👉 Template Literals
//     👉 Event Listeners
//     👉 Higher order Function (Math.random())
// */

// // ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// // getComputerChoice() 👉 'Rock'
// // getComputerChoice() 👉 'Scissors'
// const totalScore = { computerScore: 0, PlayersScore: 0 };
// function getComputerChoice() {
//   let rspchoice = ["rock", "paper", "scissors"];
//   let computerChoice = Math.floor(Math.random() * rspchoice.length);
//   return rspchoice[computerChoice];
// }

// // ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// // human wins - getResult('Rock', 'Scissors') 👉 1
// // human loses - getResult('Scissors', 'Rock') 👉 -1
// // human draws - getResult('Rock', 'Rock') 👉 0
// function getResult(playerChoice, computerChoice) {
//   // return the result of score based on if you won, drew, or lost
//   // All situations where human draws, set `score` to 0
//   let score;
//   if (playerChoice === computerChoice) {
//     score = 0;
//   }
//   // All situations where human wins, set `score` to 1
//   else if (playerChoice === "rock" && computerChoice === "scissors") {
//     score = 1;
//   } else if (playerChoice === "paper" && computerChoice === "rock") {
//     score = 1;
//   } else if (playerChoice === "scissors" && computerChoice === "paper") {
//     score = 1;
//   }
//   // make sure to use else ifs here
//   // Otherwise human loses (aka set score to -1)
//   else {
//     score = -1;
//   }
//   // return score
//   return score;
// }

// // ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
// function showResult(score, playerChoice, computerChoice) {
//   let resultDiv = getElementById("result");
//   // switch (score) {
//   //   case -1:
//   //     resultDiv.innerText = `you loose`;
//   //   case 0:
//   //     resultDiv.innerText = "draw";
//   //   case -1:
//   //     resultDiv.innerText = "you loose";
//   if ((score = -1)) {
//     resultDiv.innerText = "you lost";
//   } else if ((score = 0)) {
//     resultDiv.innerText = "its draw";
//   } else {
//     resultDiv.innerText = "you win";
//   }
//   // }
//   // Hint: on a score of -1
//   // You should do result.innerText = 'You Lose!'
//   // Don't forget to grab the div with the 'result' id!
//   let PlayersScore = getElementById("player-score");
//   PlayersScore.innerText = getResult(playerChoice, computerChoice); //to get it on the screen
//   let HandsDiv = getElementById("hands");
//   HandsDiv.innerText = `👩‍🦰 ${playerChoice} VS 👾 ${computerChoice}`;
// }

// // ** Calculate who won and show it on the screen **
// function onClickRPS(playerChoice) {
//   console.log(playerChoice);
//   const computerChoice = getComputerChoice();
//   console.log(computerChoice);

//   const score = getResult(playerChoice, computerChoice);
//   console.log(score);

//   totalScore["PlayersScore"] += score;
//   console.log(totalScore);
//   showResult(score, playerChoice, computerChoice);
// }

// // ** Make the RPS buttons actively listen for a click and do something once a click is detected **
// function playGame() {
//   // use querySelector to select all RPS Buttons
//   let rpsButtons = document.querySelectorAll(".rpsButton"); //using rspButton which is class name in html
//   // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
//   // rpsButtons[0].onclick = () => console.log(rpsButtons[0].value);

//   // 1. loop through the buttons using a forEach loop

//   // 2. Add a 'click' event listener to each button
//   // 3. Call the onClickRPS function every time someone clicks
//   // 4. Make sure to pass the currently selected rps button as an argument
//   rpsButtons.forEach((rpsbutton) => {
//     rpsbutton.onclick = () => onClickRPS(rpsbutton.value);
//   });
//   // Add a click listener to the end game button that runs the endGame() function on click
//   const endGameButton = getElementById("endGameButton");

//   endGameButton.onclick = () => endGame(totalScore);
// }

// // ** endGame function clears all the text on the DOM **
// // since our entire app has acess to this total score so we pass this as parameter
// function endGame(totalScore) {
//   totalScore[playerScore] = 0;
//   totalScore[computerScore] = 0;
//   // copy and pasting thins from above and making things in dom clear from show result

//   let playerScore = document.getElementById("player-score");
//   playerScore.innerText = "";

//   let hands = document.getElementById("hands");
//   hands.innerText = "";
//   let result = document.getElementById("result");
//   result.innerText = "";
// }
// playGame();

/*
  Rock Paper Scissors SOLUTION 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  let rpsChoices = ["Rock", "Paper", "Scissors"];
  let computerChoice = rpsChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost

  let score;

  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;

    // Otherwise human loses (aka set score to -1)
  } else {
    score = -1;
  }

  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!

  let result = document.getElementById("result");
  switch (score) {
    case -1:
      result.innerText = `You Lose!`;
      break;
    case 0:
      result.innerText = `It's a Draw!`;
      break;
    case 1:
      result.innerText = `You Win!`;
      break;
  }

  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  playerScore.innerText = `${Number(playerScore.innerText) + score}`;
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice.value, computerChoice);
  showResult(score, playerChoice.value, computerChoice);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  let rpsButtons = document.querySelectorAll(".rpsButton");

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton);
  });

  // Add a click listener to the end game button that runs the endGame() function on click
  let endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  let result = document.getElementById("result");
  playerScore.innerText = "";
  hands.innerText = "";
  result.innerText = "";
}

playGame();
console.log("web tech");
