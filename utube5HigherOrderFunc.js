// higher order functions are functions taking other function as an argument

// map-loops and returns an array
[1, 3, 5, 7].map((number) => console.log(number));
[1, 3, 5, 7].map((number) => {
  console.log(number);
  console.log("just rock itt...");
});
let result = [1, 3, 5, 7].map((number) => number * 2);
// function(number){
//   return number*2
// }
console.log(result);
const doubleFxn = (numbers) => {
  return numbers.map((numbers) => numbers * 2);
};
console.log(doubleFxn([9, 7, 8, 1]));

//filter-loops and returns an array with matching conditions
const Filtering = (values, value) => {
  let end = [];
  for (const numberrr of values) {
    if (numberrr > value) {
      end.push(numberrr);
    }
  }
  return end;
};
console.log(Filtering([1, 2, 3, 4, 5, 6], 3));

// using filter method
const nums = [1, 4, 6, 8, 9];
console.log(nums.filter((num) => num <= 6 && num > 2));
// creating a object with in the array
// array of objects
const actors = [
  { name: "nani", salary: 2000000 },
  { name: "pavan", salary: 230000 },
  { name: "Honey", salary: 150000 },
  { name: "balayyaa", salary: 430000 },
];
let output = actors.filter((actor) => actor.salary > 2000000);
console.log(output);
// utube5HigherOrderFunc.innerHTML = "<h1>Hemanth @annai</h1>";
// utube5HigherOrderFunc.innerHTML = `<h1>${output[0].name}</h1>`;
// utube5HigherOrderFunc.innerHTML = `<h1>${JSON.stringify(output)}</h1>`;
// // this above syntax gives output a string form of everything which doesn't look good
// // so we use follwing syntax to be more clear
// let names = output.map((actorrr) => actorrr.name).join(", ");
// utube5HigherOrderFunc.innerHTML = `<h1>${names}</h1>`;

// // push is replaced by map

// document.body.innerHTML = "hellooooo";

// reduce-work is to loop and gives the accumilator
// taking an array and reducing to single digit like single value after summing and multiplying
const reduNums = [1, 2, 3, 4];
const ourResult = reduNums.reduce(function (prev, current) {
  return prev + current;
  //console.log(current);
});
console.log(ourResult);
// using es6 notation

function multiply(a, b) {
  return a * b;
}
const arrayVal = [3, 5, 1];
const multResult = arrayVal.reduce(multiply);
console.log(multResult);
const result1 = arrayVal.reduce((a, b) => a + b, 0);
// the above syntax when we started coun at 0;
// the  below  syntax when we started coun at -10;

const result2 = arrayVal.reduce((a, b) => a + b, -10);

console.log(result1);
console.log(result2);
const resultActorSum = actors.reduce(
  (prev, current) => prev + current.salary,
  0
);
console.log(resultActorSum);
