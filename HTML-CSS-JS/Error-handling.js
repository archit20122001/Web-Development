//Complie time error
// Syntax error
// console.log(1;

// Run time error
// Reference error
// console.log(x);

// Error Handling

try {
    // This is where possible errors are written
    console.log("Try block starts here");
    console.log(x);
    console.log("Try block ends here");
}
catch (e) {
    // This is where you define the handling of the error or further procedure, retry logic, fallback mechanism, custom error
    console.log("Inside the catch block");
    console.log("This is the error: ", e);
}
finally {
    // This will run everytime, error or no error
    console.log("Inside the finally block which runs always no matter the state of try and catch block");
}

try{
    // Reference error
    console.log(a);
}
catch(err){
    // Custom error message
    throw new Error("First declare the value of the variable");
}

let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid Json");
}