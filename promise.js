// let firstPromise = new Promise((resolve, reject) => {
//     // console.log("Archit");
//     // resolve(1001);
//     // reject(new Error("Internal Server Error"));

//     setTimeout(function sayMyName() {
//         console.log("My name is Archit");
//     }, 10000);
//     resolve(1);
// });


// let secondPromise = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//         resolve("Promise Fulfilled");
//     }
//     else {
//         reject("Promise Rejected");
//     }
// });

// secondPromise.then((message) => {
//     console.log("Message is: " + message);
// }).catch((error) => {
//     console.log("Error: " + error);
// })

// secondPromise.then((message) => {
//     console.log("First Message: " + message);
//     return "Promise fulfilled second message";
// }).then((message) => {
//     console.log("Second Message: " + message);
//     return "Promise fulfilled third message";
// }).then((message) => {
//     console.log("Third Message: " + message);
// }).catch((error) => {
//     console.log("Error: " + error);
// }).finally((message) => {
//     console.log("Finally will always run.");
// })

let thirdPromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
})
let fourthPromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Second");
})
let fifthPromise = new Promise((resolve, reject) => {
    setTimeout(reject, 4000, "Third");
})

Promise.all([thirdPromise, fourthPromise, fifthPromise]).then((values) => {
    console.log(values);
}).catch((error) => {
    console.log(error);
})