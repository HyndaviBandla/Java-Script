// console.log("hello night");
// let title = document.getElementById("head");
// console.log("before:", title.innerText);
// let msg = "goodbye my friend";
// title.innerText = msg;
// console.log("after:", title.innerText);
// title.innerHTML = `<u>${msg}</u>`;
// title.style.backgroundColor = "red";
// let redDiv = document.getElementById("red");
// let yellowDiv = document.getElementById("yellow");
// let greenDiv = document.getElementById("green");

// // redDiv.onclick=()=>console.log('red');
// // yellowDiv.onclick=()=>console.log('yellow');
// // greenDiv.onclick=()=>console.log('green');
// const squares = document.querySelectorAll(".colorSquare");
// // the above statemnt will give us in the form of nodelist
// // console.log(squares);
// // console.log(squares[0].value)
// // console.log(squares[1].value)
// // console.log(squares[2].value)
// const timesClicked = { red: 0, yellow: 0, green: 0 };
// squares.forEach(
//   (square) =>
//     (square.onclick = () => {
//       // when we clicked on red thrn square on value becones red where it is observed in list and increments its value
//       timesClicked[square.value] += 1;
//       square.innerText = timesClicked[square.value];
//       // console.log(square.value)
//     })
// );
// function clearScores() {
//   // timesClicked.red = 0
//   // timesClicked.yellow = 0
//   // timesClicked.green = 0
//   squares.forEach((square) => {
//     square.innerText = "";
//   });
// }

// const clearGameBtn = document.getElementById("clear-scores");
// clearGameBtn.onclick = () => clearScores();
console.log("hello");

let titleDiv = document.getElementById("title");

console.log("before: ", titleDiv.innerText);

let message = "Square Color Counter 🚀";

titleDiv.innerText = message;

console.log("after: ", titleDiv.innerText);

titleDiv.innerHTML = `<p>${message}</p>`;

titleDiv.style.backgroundColor = "blue";

const squares = document.querySelectorAll(".colorSquare");

// forEach
const timesClicked = { red: 0, yellow: 0, green: 0 };
squares.forEach((square) => {
  square.onclick = () => {
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];
  };
});
function clearScores() {
  timesClicked.red = 0;
  timesClicked.yellow = 0;
  timesClicked.green = 0;
  squares.forEach((square) => {
    square.innerText = "";
  });
}

const clearGameBtn = document.getElementById("clear-scores");
clearGameBtn.onclick = () => clearScores();
