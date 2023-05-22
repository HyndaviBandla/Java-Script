let fruits = [1, 2, 5, 4];
let sum = 0;
const SumArray = () => {
  for (const fruit of fruits) {
    sum = sum + fruit;
  }
  return { sum };
  //gives output as:   { sum: 12 }
};
console.log(SumArray());
console.log(max(fruits));
