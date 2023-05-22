var a=[1,2,3];
console.log(a.length);
a.length=1;
console.log(a);
var b=a;
console.log(b);

a=[];
console.log(a);
console.log(b);
// a-->[1,2,3]<--b
// a-->[1]<--b
// a->[]
// b->[1]

// cant have two elements with same id but can have same class

console.log(document.getElementById("app"));
document.getElementById("app").innerHTML='<span>hey i am a span</span>';

var d=document.createElement("div");
d.innerText="i am created element";
document.body.appendChild(d);
var e=document.getElementsByClassName("test");
console.log(e);