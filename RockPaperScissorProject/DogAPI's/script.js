// .then-promises
// leads in to asycronous programming
// asycronous(stuff u have to wait for) means things which are known to it will run first like the loading of image thing taks 2 secons of time so it will run later
// json is a object with two keys inside message and status
const dogImageDiv = document.getElementById("dogImage");
const dogButtonDiv = document.getElementById("dogButton");
const newDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    // when ever u r dealing with promises if u just call the above line it gives the promise then these two below dot then  were chained and pulls out data and then ur code runs and waits for 2 sec
    // once we got data back we will turn that data  in to json-grab the response and turn it in to json
    // here below .then runs whenever this promise of fetch resolves

    .then((response) => response.json())
    .then((json) => {
      dogImageDiv.innerHTML = `<img src='${json["message"]}' height=300 width=300/>`;
    });
};
dogButtonDiv.onclick = () => newDog();
