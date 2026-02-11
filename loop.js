// for (let i = 1; i <= 10; i++) {
//     console.log("Archit");
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 5; i > 0; i--) {
//     console.log(i);
// }

// for (let i = 1; i <= 6; i++) {
//     if (i == 4)
//         break;
//     else
//         console.log(i);
// }

// for (let i = 1; i <= 6; i++) {
//     if (i == 3)
//         continue;
//     else
//         console.log(i);
// }

// let i = 1;
let i = 10;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// while (i < 6) {
//     if (i == 3){
//         i++;
//         continue;
//     }
//     else
//         console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// }
// while (i < 10);

do {
    console.log(i);
    i--;
}
while (i > 4);

// The problem with do while loop is it will execute the first iteration without checking the condition, so it will run once no matter what.

let arr = [10, 20, 30, 40, 50, 60];

let length = arr.length;
console.log("The length of the array is: ", length);

arr.forEach((value, index) => {
    console.log("Number: ", value, "Index: ", index);
})

let obj = {
    name: "Archit",
    age: 25,
    weight: 85,
    height: "5'9 feet",
    greet: function () {
        console.log('hello');
    }
};

for (let key in obj) {
    console.log(key, ": ", obj[key]);
}

let fullName = "Archit Kumar Singh";

for (let value of fullName){
    console.log(value);
}