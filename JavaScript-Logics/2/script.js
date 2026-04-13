console.log("Hi from the Script file");
var age = 10;
console.log(age);
var num1 = 20;
var num2 = 30;
console.log(num1 + num2);
var age = "Archit";
console.log(age);
console.log(hose);
var hose = 42;
console.log(hose);

// var --> global scoped variable and can be accessedf from anywhere in the code. This is the issue with var, since it can be accessed anywhere, this leads to reassigning the values and can be changed from anywhere in the code, which can lead to severe errors and bugs. Hence we don't use var in our codes.

let age2 = 45;

age2 = "Archit";

console.log(age2);

// let --> Local variable declartion and is block scoped, which menas it can be used and changed inside a function block and cannot be redesignated outside the block scope.

// if (true){
//     let a = 10;
// }

// console.log(a);

const age3 = 26;
console.log(age3);

age3 = "Archit";
age3 = 34;

// const -> cannot be reassigned at any case, also needs immidiate value assignment and cannot be called outside block scope.
