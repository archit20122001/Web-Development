const ele = document.getElementById("username");
console.log(ele);
ele.setAttribute("area", "342");
ele.innerText = "John Doe";
ele.innerHTML = "<h4>Hacked</h4>";
ele.classList.add("red-color", "underlined");
console.log(ele.classList);
ele.classList.remove("red-color");
const heading = document.getElementById("heading2");
heading.style.textDecoration = "underline";
heading.style.color = "rgb(113,113,204)"
heading.parentElement.style.background = "lavender"
