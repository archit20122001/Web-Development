document.addEventListener("DOMContentLoaded", function () {
    // 1. Select all the input fields and sliders
    const inputs = document.querySelectorAll('.value-input');
    const initialInput = inputs[0];
    const finalInput = inputs[1];
    const durationInput = inputs[2];

    const initialSlider = document.getElementById('initial-investment-slider');
    const finalSlider = document.getElementById('final-investment-slider');
    const durationSlider = document.getElementById('duration-slider');

    // 2. Select the output display elements
    const cagrOutput = document.querySelector('.cagr-percentage .value-text');
    const summaryInitial = document.querySelectorAll('.summary-item .value-text')[0];
    const summaryFinal = document.querySelectorAll('.summary-item .value-text')[1];
    const progressBar = document.querySelector('.progress-bar-fill');

    // 3. Core Calculation Function
    function calculateCAGR() {
        const pv = parseFloat(initialInput.value) || 0;
        const fv = parseFloat(finalInput.value) || 0;
        const n = parseFloat(durationInput.value) || 0;

        let cagr = 0;

        // Ensure inputs are valid to avoid division by zero or NaN
        if (pv > 0 && n > 0 && fv > 0) {
            // Apply the CAGR formula
            cagr = (Math.pow((fv / pv), (1 / n)) - 1) * 100;
        }

        // 4. Update the UI
        // Format to 1 decimal place (e.g., 38.0%), or show 0% if invalid
        cagrOutput.textContent = isNaN(cagr) ? "0%" : `${cagr.toFixed(1)}%`;

        // Update the summary text using Indian Rupee formatting (e.g., 1,00,000)
        summaryInitial.textContent = pv.toLocaleString('en-IN');
        summaryFinal.textContent = fv.toLocaleString('en-IN');

        // Update the bottom progress bar (capped at 100% so it doesn't break out of the container)
        const progressWidth = Math.min(Math.max(cagr, 0), 100);
        progressBar.style.width = `${progressWidth}%`;
    }

    // 5. Dynamic Slider Fill Function
    function updateSliderFill(slider) {
        const val = parseFloat(slider.value);
        const min = parseFloat(slider.min) || 0;
        const max = parseFloat(slider.max) || 100;
        const percentage = ((val - min) / (max - min)) * 100;

        // Updates the background gradient to show 'progress' on the slider track
        slider.style.background = `linear-gradient(to right, #5d7c71 0%, #5d7c71 ${percentage}%, #eee ${percentage}%, #eee 100%)`;
    }

    // 6. Sync Inputs and Sliders together
    function syncElements(slider, input) {
        // When slider moves, update input box
        slider.addEventListener('input', function () {
            input.value = slider.value;
            updateSliderFill(slider);
            calculateCAGR();
        });

        // When input box is typed into, update slider
        input.addEventListener('input', function () {
            slider.value = input.value;
            updateSliderFill(slider);
            calculateCAGR();
        });
    }

    // Initialize the sync process for all three variables
    syncElements(initialSlider, initialInput);
    syncElements(finalSlider, finalInput);
    syncElements(durationSlider, durationInput);

    // Run once on load to set the initial states and fills
    updateSliderFill(initialSlider);
    updateSliderFill(finalSlider);
    updateSliderFill(durationSlider);
    calculateCAGR();
});