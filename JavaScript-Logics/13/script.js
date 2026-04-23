// Query Selector - Select the first element of its type
/*
selectors
- tag name
- id -> #
- class -> .
*/

// By using Query Selector
const body = document.querySelector("body");
// body.innerHTML = "<h1>Hacked!!</h1>";
console.log(body.innerHTML);
const div = document.querySelector("div");
// div.innerHTML = "<h1>Hacked!!</h1>";
console.log(div.innerHTML);
const name = document.querySelector("#username");
// name.innerText = "Ayush Kumar Singh";
// name.innerHTML = "<h2>Ayush Kumar Singh</h2>";
const nav = document.querySelector(".block");
console.log(nav);
const para = document.querySelector(".paragraph");
console.log(para);
const ele = document.querySelectorAll(".block");
console.log(ele);
ele.forEach((e)=>{
    console.log(e.innerHTML);
})