let currentProgress = 0;
const duration = 5000;

const progressBar = document.getElementById('myProgressBar');
const statusText = document.getElementById('statusText');
const percentInput = document.getElementById('percentInput');
const fillButtons = document.querySelectorAll('.fill-btn');
// Changed to select multiple reduce buttons
const reduceButtons = document.querySelectorAll('.reduce-btn');

// --- INCREASE LOGIC ---
fillButtons.forEach(button => {
    button.setAttribute('data-used', 'false');

    button.addEventListener('click', function () {
        const inputValue = percentInput.value.trim();
        
        // Check if empty or zero
        if (inputValue === "" || parseFloat(inputValue) === 0) {
            alert("Please enter a percentage value before clicking a button.");
            return; 
        }

        const increment = parseFloat(inputValue);

        if (increment > 100) {
            alert("Please enter a value between 1 and 100");
            return;
        }

        // Mark as permanently used
        this.setAttribute('data-used', 'true');

        const startValue = currentProgress;
        const endValue = Math.min(currentProgress + increment, 100);
        currentProgress = endValue;

        updateUI(startValue, endValue);
    });
});

// --- NEW DECREASE LOGIC (Multiple Buttons) ---
reduceButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Pull the specific value from the button's data attribute
        const reductionValue = parseFloat(this.getAttribute('data-reduce')) || 0;
        
        const startValue = currentProgress;
        const endValue = Math.max(currentProgress - reductionValue, 0);
        currentProgress = endValue;

        updateUI(startValue, endValue);
    });
});

// Consolidating UI updates
function updateUI(start, end) {
    // 1. Trigger Bar Animation
    progressBar.style.width = end + '%';

    // 2. Trigger Number Animation
    syncCounter(start, end, duration);

    // 3. Handle Button States
    if (end >= 100) {
        progressBar.classList.add('full');
        // Disable all increase buttons
        fillButtons.forEach(btn => btn.disabled = true);
    } else {
        progressBar.classList.remove('full');
        // Re-enable only the increase buttons that weren't used yet
        fillButtons.forEach(btn => {
            const wasUsed = btn.getAttribute('data-used') === 'true';
            btn.disabled = wasUsed;
        });
    }
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