let count = 0;
const display = document.getElementById('display');

function changeCount(value) {
    count += value;
    updateDisplay();
}

function resetCount() {
    count = 0;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = count;
    if (count < 0) {
        display.style.color = "#e74c3c";
    } else {
        display.style.color = "#2c3e50";
    }
}