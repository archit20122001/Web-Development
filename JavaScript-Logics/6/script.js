// for (let i = 0; i <=10; i++) {
//     console.log('Archit '+ i);
// }

let number = 50;
let guess = 0;
do {
    guess = parseInt(prompt("Enter the number the computer has guessed, don't have any idea, enter 0: "));
    if (guess == number) {
        alert("Winner");
        break;
    }
    else if (guess == 0) {
        alert("You gave up, the number was: " + number);
        break;
    }
    else
        continue;
}
while (guess != 0)