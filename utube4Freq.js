// const phrase = "web development";
const frequencyCount = (phrase) => {
  let frequency = {};

  for (const char of phrase) {
    if (char in frequency) {
      frequency[char] += 1;
    } else {
      frequency[char] = 1;
    }
  }
  return frequency;
};
// console.log(frequencyCount(phrase));
const phrase = "hi lol ,don't cry hi lol";
const wordFrequency = (sentence) => {
  let words = phrase.split(" ");
  // let frequency = {};
  // for (word of sentence) {
  //   // console.log(word);
  //   if (word in frequency) {
  //     frequency[word]++;
  //   } else {
  //     frequency[word] = 1;
  //   }
  // }
  return frequencyCount(words);
};
console.log(wordFrequency(phrase));
