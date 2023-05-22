//  fruit=prompt("what is ur favourite fruit")
// console.log(fruit)
let fruits = [1, 2, 5, 8, 2, 3, 9];
const arrayy = [];
const PresentArray = () => {
  for (const fruit of fruits) {
    // console.log(fruit * fruit);
    arrayy.push(fruit * fruit);
  }
  return arrayy;
};
console.log(PresentArray());

// let whether = prompt("hey is it raining?");
// function mytype(whether) {
//   if (whether == "rain") {
//     console.log("have an umbrilla");
//   } else {
//     console.log("have a sun glasses");
//   }
// }
// mytype(whether);
const phrase = "hi,do you watch movies?";
let result = 0;
// if we use "in" in fir loop we get index if we use "of" then we get elements present in ..
for (const index in phrase) {
  console.log(Number(index) + 1);
  result = Number(index) + 1;
}
console.log(result);
// console.log("result " + phrase.length);
