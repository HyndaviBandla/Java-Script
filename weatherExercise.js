function weather(condition) {
  let score;
  if (condition == "sunny") {
    score = 1;
  } else if (condition == "rainy") {
    score = 0;
  } else {
    score = -1;
  }
  return score;
}
console.log(weather("rainy"));
// function sayHello() {

//   alert("Hello!");

// }
