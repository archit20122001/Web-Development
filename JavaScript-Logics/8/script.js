function sayHello() {
    console.log("Hello!");
}

sayHello();

const sayHi = () => {
    console.log("Hi!");
}

sayHi();

const add = (a, b) => a + b;
console.log(add(3, 7));

// We can't use arguments in an arrow function declaration since arguments do not work in arrow function. The reason arguments does not work in arrow functions is that arrow functions do not have their own arguments object. Instead, they are designed to be "lexically scoped," meaning they inherit the arguments object from their parent (enclosing) function.

const sum = (...nums) => {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result = result + nums[i];
    }
    return result;
}

console.log(sum(2, 4, 8, 6, 39, 11, 74, 46));

const obj = {
    value: 20,
    myFunction: function() {
        console.log(this);
    }
}

obj.myFunction();