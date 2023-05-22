// primitive types
//string
//boolean
//undefined
//number
//null
var a=2;
var b='2';
var k=true;
var e=null;
console.log(b);
console.log(k);
console.log("hello world");
console.log(typeof(e));

console.log(a==b);
// type of corection-implicit and explicit
// above one compares value not data type
console.log(a===b);
// when 3 equal symbols were used it compares data type and value
// when number get added to string then number get converted to string
console.log(false=='0');
console.log(false==='0');

// +"6"->makes a number
// so (6+"6")=12
// 6+ -"6"     =0
// every thing in js is object
// -"24"+10
// unshift adds element at the begin and shift removes the element from the begin
var a=[1,"3","strong",34,function(){log.console}]
// splice(fromindex,howmany)
// remove 1 element from from index 2
a.splice(1,3);
// above one removes 3 elements from index 1
console.log(a);
console.log("24"+10);
console.log(+"abc");
console.log("equalities");
console.log(+"abc"===+"def");
console.log(typeof(NAN));
console.log(typeof(undefined));
//gives undefined
// above o/p is number
// function declaration and function expression
function abc(){
    console.log("i am abc");
}
var a=function() {
console.log("i am a");
}
console.log("below using fxn expression if there is a condition");
var d;
var f=12;
if(f===12){
    d=function(){console.log("do 1") }

}
else{
    d=function(){console.log("do 2") }
}
d();





//objects
var dog={
name:"dreamy",
Breed:"jessy",
// need a fxn for console.log so fxn for bark
Bark:function(){
    console.log("bow bow");

},
owner:{
    name:"sid",
    age:30
}
};
console.log(dog.owner.name);

console.log(dog.name);
// or
console.log(dog["name"]);
var BreedOfKey="Breed";
// if u want to get dynamically name of the key
console.log(dog[BreedOfKey]);
// the above lines is same as dog["Breed"]

console.log(dog.Bark());

// below one (type of) will give a string
// typeof typeof(undefined)
// gives "undefined"

// for making copy use spread operator as shown below
var a=[1,2,3,4,5];
var b=[...a];
console.log(a);
console.log(b);
// get all elements-then get element by class if particular the use id
// dom-document object model
// it is tree like structuredClonehtml internally stores like dom
// all html tags become dom
// 




// implicit and explicit conversions
// due to implicit "24"+10   =2410

//javascript.info book
// cant have two elements with same id but can have same class

console.log(typeof(a));
let c=5;
console.log(typeof(c));
for(var i=0;i<a.length;i++){
    console.log(a[i]);
}
console.log("second method:")
a.forEach(function(element){
console.log(element);
})
console.log("getting particular element in array");
console.log(a[2]);
a.push(8);
console.log(a);
a.pop();
console.log(a);
// sift and unshift
// are same like push and pop but from the begining of the array
a.unshift("9");
console.log(a);

a.shift();
console.log(a)