// variable scoping: 

// global scope: can be accessed throughout the code
// var age =15;

// console.log(age);

// function sayAge(){
//     console.log("your age is: ", age);
// }

// sayAge();

// function scope: only accesible in the function

function Greet(){
    var name = "Earth";
    console.log("Greetings to the people of", name);
}

Greet();

// Block scope: only var can be accessed outside block scope. Variables declared with let and const are block-scoped. This means they only exist inside the set of curly braces { ... } where they are defined. They are invisible to the code outside those braces.

console.log(age);

{
    var age = 15;
}

// {
//     let age = 25;
// }

// {
//     const age = 35;
// }

// Temporal deadzone: line 41 to 44 are temporal deadzones since marks cannot be retrieved from the data and nothing in between them will get executed.

// console.log(marks);
// console.log("Hello");
// console.log("Hi");
// let marks = 100;
console.log(marks);