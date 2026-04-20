const arr = ["Archit", "Anjney", "Anamika", "Ananya", "Amar", "Ajay"];

function print(n) {
    console.log(n);
}
print("Abhimanyu");
arr.forEach(print);
arr.forEach((val) => {
    console.log(val + " ☠️");
})

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

let newArr2 = arr2.map((num) => { return num * 2 });

console.log(arr2);
console.log(newArr2);

let ans = arr2.find(num => num === 3);
console.log(ans);

let ans2 = arr2.findIndex(num => num === 3);
console.log(ans2);