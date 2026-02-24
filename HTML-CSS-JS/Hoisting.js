console.log(age);
var age = 25; //The resultwill be undefined but not erroroneous

// if let or const is used, error will be received

// let age = 25;
// const age = 25;

myName("Archit");

// function declaration -> This will work.
function myName(Name){
    console.log(Name);
}

// function declaration using expression -> This won't work
// let myName =  function(Name){
//     console.log(Name);
// }

// Class decalration won't work either

const object1 = new Person(); // Won't work

class Person{
    
}

const object2 = new Person(); //This will work

