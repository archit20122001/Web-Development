function showAlert(){
    let message;
    message ="Hello World"
    alert(message);
}
showAlert();

let message = "hello";
message = 123456;
alert(message);

// let name = "John";
// alert( `Hello, ${name}!` );
// alert( `the result is ${1 + 2}` );

// typeof undefined // "undefined"

// typeof 0 // "number"

// typeof 10n // "bigint"

// typeof true // "boolean"

// typeof "foo" // "string"

// typeof Symbol("id") // "symbol"

// typeof Math // "object"  (1)

// typeof null // "object"  (2)

// typeof alert // "function"  (3)

let name = "Ilya";

alert( `hello ${1}` );

alert( `hello ${"name"}` );

alert( `hello ${name}` );