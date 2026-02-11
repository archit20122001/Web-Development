let greet = function () {
    console.log("Greetings!");
}

// greet();

function greeting(greet, Name) {
    console.log("Hey ", Name);
    greet();
}

greeting(greet, "Archit");

function solve(num) {
    return function (num) {
        return num * num;
    }
}

let ans = solve(4);
console.log(ans(4));

const arr = [
    function (a, b) {
        return a + b;
    },
    function (a, b) {
        return a - b;
    },
    function (a, b) {
        return a * b;
    },
    function (a, b) {
        return a / b;
    }
];

let answer = arr[0];
console.log(answer(10,4));

let obj = {
    age: 25,
    wt: 36,
    ht: 180,
    greet: ()=>{
        console.log("Hey everyone");
    }
}

console.log(obj.ht);
obj.greet();