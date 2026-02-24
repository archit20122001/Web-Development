// function sayMyName() {
//     console.log("Archit");
// }

// sayMyName();

// function printCount() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i);
//     }
// }

// printCount();

// function printNumber(num) {
//     console.log("Printing number: ", num)
// }

// printNumber(105);

// function getAverage(num1, num2) {
//     let avg = (num1 + num2) / 2;
//     console.log("Average: ", avg);
// }

// getAverage(10, 20);

// return functions:

function getSum(a, b, c) {
    let sum = a + b + c;
    return sum;
}

let sum = getSum(10, 20, 30);
console.log("Sum: ", sum);

function getFullName(firstName, lastName) {
    let fullName = firstName + " " + lastName; //This will print the strings in the parameters
    // let fullName = firstName + lastName; //This will print the numbers in the parameters
    return fullName;
    // unreachble statements
    // let a = 10;
    // let b = 20;
    // let c = a + b;
    // console.log(c);
}

let name = getFullName("Archit", "Singh");
console.log("Name: ", name);

let a = getFullName(7, 7);
console.log(a);

function getMultiplication(num1, num2) {
    return num1 * num2;
}

console.log(getMultiplication(10, 20));

// Another way to create a function:

let getMultiply = function (num3, num4) {
    return num3 * num4;
}

console.log(getMultiply(10, 20));

let square = function (num5) {
    return num5 ** 2;
}

console.log(square(10));

// Arrow function:

let getExp = (x, y) => {
    return x ** y;
}

console.log(getExp(2, 3));