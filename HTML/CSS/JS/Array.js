// let arr = [1,2,3,4,5]
// console.log(arr);

// let brr = new Array('Arks', 1, true);
// console.log(brr);
// console.log(brr[2]);
// brr.push('Singh');
// console.log(brr);
// brr.pop();
// console.log(brr);
// brr.shift();
// console.log(brr);
// brr.unshift('Archit');
// console.log(brr);
// brr.push(20);
// brr.push(30);
// brr.push(40);
// console.log(brr);
// console.log(brr.slice(2,4));
// brr.splice(2,1,'Arks');
// console.log(brr);
// brr.splice(3,0,'TARK');
// console.log(brr);

// arr2 = [10, 20, 30];

// arr2.map((number, index) => {
//     console.log(number);
//     console.log(index);
// })

// let ansArr = arr2.map((number) => {
//     return number * number;
// })

// console.log(ansArr);

// let arr3 = [10, 41, 57, 22, 58, 36, 11];
// let evenArray = arr3.filter((number) => {
//     return number % 2 === 0;
// })

// console.log(evenArray);

// let arr4 = [1,2, 'Arks', true, "", "10", null];

// let ansArr2 = arr4.filter((value)=>{
//     if(typeof(value)=='string')
//         return true;
//     else
//         return false;
// })

// console.log(ansArr2);

let arr4 = [20, 30, 10, 40, 60, 50];
let ans = arr4.reduce((accumulator, current) => {
    return accumulator + current;
})

console.log(ans);

arr4.sort();
console.log(arr4);
console.log(arr4.indexOf(30));