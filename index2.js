// person is object here
let person = {
  name: "hyndavi",
  age: 18,
  charecter: "positivity",
};
person.age = 19;
console.log(person.name);
console.log(person.age);
let selection = "charecter";

person[selection] = "interactive";
// console.log(person["charecter"])
// to be dynamic we use below one
console.log(person["charecter"]);
let person = {
  name: "Hyndavi",
  reg: 9202,
};
console.log(person["name"]);
//   need to give name in quotes
