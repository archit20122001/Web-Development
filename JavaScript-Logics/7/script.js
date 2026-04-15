//           arguments
//               |
//               V
function add(num1, num2) {
    return (num1 + num2);
}
//           Parameters
//             |
//             V
const a = add(2, 3);
console.log(a);

//                arguments
//                    |
//                    V
function multiply(num1, num2) {
    return (num1 * num2);
}
//                Parameters
//                  |
//                  V
const m = multiply(2, 3);
console.log(m);

const answer = multiply(a, m);
console.log(answer);

// With the help of 'arguments' keyword, any number of arguments can be passed to the function

function addNumbers() {
    let ans = 0;
    for (let i = 0; i < arguments.length; i++) {
        ans = ans + arguments[i];
    }
    return ans;
}

const n = addNumbers(5, 4, 25, 16)
console.log(n);

function addNumbersV2(...number){
    let ans = 0;
    for (let i = 0; i<number.length;i++){
        ans = ans + number[i];
    }
    return ans;
}

const n2 = addNumbersV2(5,7,33,65)
console.log(n2);