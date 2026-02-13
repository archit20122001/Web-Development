let src1 = {
    age : 25,
    weight: 65,
    height: 179
};

let src2 ={
    Name: "Archit",
    value: 10000
};


console.log(src1);

src1.color = "White";

console.log(src1);

let dest1 = {...src1}; // This is cloning-->Method 1
// let dest = src1;  // This is referencing

console.log(dest1);

let dest2 = Object.assign({}, src1); //This is cloning --> Method 2
console.log(dest2);

let dest3 = Object.assign({}, src1, src2);
console.log(dest3);

let dest4 = {};

for (let key in src1){
    let newKEY = key;
    let newVALUE = src1[key];
    dest4[newKEY] = newVALUE;
} //This is cloning -> Method 3, less used
console.log(dest4);