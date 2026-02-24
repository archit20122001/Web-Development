let age = "18";
let card = false;
if (age >= 18 && card) {
    console.log('can vote');
}
else if (age >= 18) {
    if (!card) {
        console.log('cannot vote till card is issued');
    }
}
else {
    console.log('cannot vote');
}

let num = 3;
switch (num) {
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    default:
        console.log('default');
}