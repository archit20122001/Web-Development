const age = 20;
if(age>=18){
    console.log("Yes, You can vote");
}
else {
    console.log("Nope, cannot vote yet");
}

const age2 = 20;
age2 >=18 ? console.log("Yes, you are allowed") : console.log("No, You are not allowed")

// switch case 

const a = 60;
const b = 30;
const opt = '-'

switch (opt) {
    case '+':
        console.log(a+b);
        break;
    
    case '-':
        console.log(a-b);
        break;

    case '*':
        console.log(a*b);
        break;

    case '/':
        console.log(a/b);
        break;

    default:
        console.log("No operation selected");
        break;
}