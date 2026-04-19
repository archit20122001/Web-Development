const students = ["Archit", "Anjney", "Anika", "Anamika"];
console.log(students);
console.log(students[3]);
console.log(students.length);
students[2] = "Aman";
console.log(students);
students.push("Ananya");
console.log(students);

// Arrays are homogenous in most of the languages, but in JS, you can put any type of value in array

const array2 = ["Archit", 3, true, NaN, undefined, "☠️"];
console.log(array2);
console.log(typeof("☠️"));
array2.push({name: "Akash"});
console.log(array2);
console.log(array2.indexOf(true));
array2.pop();
console.log(array2);
students.reverse();
console.log(students);