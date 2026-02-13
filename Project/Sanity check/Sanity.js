let currentProgress = 0;
const duration = 5000;

const progressBar = document.getElementById('myProgressBar');
const statusText = document.getElementById('statusText');
const percentInput = document.getElementById('percentInput');
const buttons = document.querySelectorAll('.fill-btn');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const increment = parseFloat(percentInput.value) || 0;

        // CONDITION 1: If input is > 100, do nothing
        if (increment > 100) {
            alert("Please enter a value between 1 and 100");
            return;
        }

        const startValue = currentProgress;
        const endValue = Math.min(currentProgress + increment, 100);
        currentProgress = endValue;

        // Update UI
        progressBar.style.width = endValue + '%';
        syncCounter(startValue, endValue, duration);

        // Disable the clicked button
        this.disabled = true;

        // CONDITION 2: Check if bar is now full
        if (currentProgress >= 100) {
            progressBar.classList.add('full');
            disableAllButtons(); // Turn off everything else
        }
    });
});

// Helper to disable all remaining buttons
function disableAllButtons() {
    buttons.forEach(btn => {
        btn.disabled = true;
    });
}

function syncCounter(start, end, duration) {
    const startTime = performance.now();
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentFrameValue = Math.floor(start + (end - start) * progress);
        statusText.innerText = currentFrameValue + "%";
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}