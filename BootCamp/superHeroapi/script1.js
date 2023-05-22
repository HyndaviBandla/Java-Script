const base_url = "https://superheroapi.com/api.php/115410334829471";
// document.querySelector(
//   "body"
// ).innerHTML += `<img  src="${json.image.url}" />`;

// since when we use this above one the web page is laggiing a bit so we use the below syntax

let heroImgDiv = document.getElementById("HeroImg");
let searchDiv = document.getElementById("search-button");
let textSpace = document.getElementById("text-space");
let heroButton = document.getElementById("button");
let HeroName = document.getElementById("hero-name");
function getRandomHero(id, name) {
  // fetch("https://superheroapi.com/api.php/115410334829471/245");
  fetch(`${base_url}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      // document.querySelector(
      //   "body"
      // ).innerHTML += `<img  src="${json.image.url}" />`;
      //or
      // console.log(json.name);
      HeroName.innerHTML = json.name;
      console.log(json.powerstats.power); //getting these handled the same in ShoeHeroInfo
      const intelligence = `<p>🧠Intelligence:${json.powerstats.intelligence} </p>`;
      // power stas is the variable present in that info which we will see in web page when we used that particular link present in "fetch"
      console.log(json.powerstats);
      const stats = ShowHeroInfo(json);
      const powerstatistics = `<h2>${json.powerstats.power}</h2>`;
      heroImgDiv.innerHTML = `${intelligence}<img  src="${json.image.url}" height=200 width=200/>`;
    });
}
// const getStats = (charecter) => {
//   // for (stat in charecter.powerstats) {
//   //   console.log(stat);
//   console.log(Object.keys(charecter.powerstats));
//   .map loop through the array
// };

const statToEmoji = {
  intelligence: "🧠",
  strength: "💪",
  speed: "⚡",
  durability: "🏋️‍♂️",
  power: "📊",
  combat: "⚔️",
};
// and also can use map to get all the keys like intelligence ,power present in the powerstats
const ShowHeroInfo = (charecter) => {
  const stats = Object.keys(charecter.powerstats).map((stat) => {
    return `<p>${statToEmoji[stat]}${stat.toUpperCase()}:${
      charecter.powerstats[stat]
    } </p>`;
  });
  console.log(stats.join(" "));
  return stats.join(" ");
};
const selectRandom = () => {
  const maxNum = 731;
  const randomNum = Math.random() * 731;
  return Math.floor(randomNum) + 1;
  // we will add  +1 bcs we need to get last value 731 also and should't include 0  and for this f=purpose we can even use ceul fxn
};
heroButton.onclick = () => getRandomHero(selectRandom());
function getSearchSuperHero(name) {
  fetch(`${base_url}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      // since when we this link in google -  "https://superheroapi.com/api.php/115410334829471/search/spider-man"  we will get array of result of many members of spiderman so we choose th 1st element present in the array
      console.log(hero);

      heroImgDiv.innerHTML = `<img  src="${hero.image.url}" />`;
    });
}
searchDiv.onclick = () => getSearchSuperHero(textSpace.value);
