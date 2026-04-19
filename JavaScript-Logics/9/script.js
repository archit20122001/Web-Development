// Higher Order Function and Callback
function add(a, b, callback) {
    let result = a + b;
    callback(result);
}

add(3, 7, function (val) {
    console.log(val);
})

// Higher-Order Function: A function that accepts another function as an argument (or returns a function). In your code, add is the higher-order function because it takes callback as its third parameter.

// Callback Function: A function passed into another function as an argument, which is then invoked (called) inside the outer function to complete some kind of routine or action. In your code, the anonymous function function (val) { ... } is the callback.

add(40, 80, (res) => {
    console.log(res)
})