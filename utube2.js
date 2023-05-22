const user = function (name, place) {
  let myInfo = {
    name: name,
    place: place,
    presentYear: 2023,
    DOBYear: 2004,
    age: function () {
      return this.presentYear - this.DOBYear;
    },
  };
  const intro = `my name is ${myInfo.name} and my age is ${myInfo.age()}`;
  return intro;
};
// console.log(myInfo.age())
// myInfo has method age so we have used(dot) "."
console.log(user("shinchan", "china"));
