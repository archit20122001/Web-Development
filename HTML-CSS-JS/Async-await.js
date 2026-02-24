/*
1. By using Async await, you can display your asynchronous code as synchronous code.

2. Async function always returns a promise.
*/
async function getData() {
    setTimeout(function () {
        console.log("This is inside set timeout block")
    }, 3000);
}

getData();

//await --?

// fetch API

