// // using var for variable has issues so we use let
// let firstName="Hyndavi";
// // firstName- is camel notation
// let lastname="Bandla";
// console.log(lastname);
// // cannot use reserved keyword 
// // should not start with number  or should not have space or  hyphen
// //these  variables are case sensitive
let interestRate=0.3;
interestRate=1;
// if used const instead of let will not change the value and givves error
console.log(interestRate);
// primitive/value types is string ,number ,boolean,undefined and null and also symbol
// if we not initialize the variable then it is undefined
// null is used if we want to clear the value of a variable
let friendName=undefined;
let colour=null;
let redrose=true;
let a=["honey",true,"shafi"];
a[3]=3;
console.log(a.length);
// function performing a task 
function greet(name,lastname){
    console.log("hello "+name+" "+lastname);
}
greet("hyndavi","bandla");
// function returning a value
function square(number){
    return number*number;
}
let result=square(8);
console.log(result)