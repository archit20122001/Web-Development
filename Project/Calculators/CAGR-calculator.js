document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('.value-input');
    const initialInput = inputs[0];
    const finalInput = inputs[1];
    const durationInput = inputs[2];

    const initialSlider = document.getElementById('initial-investment-slider');
    const finalSlider = document.getElementById('final-investment-slider');
    const durationSlider = document.getElementById('duration-slider');

    const cagrOutput = document.querySelector('.cagr-percentage .value-text');
    const summaryInitial = document.querySelectorAll('.summary-item .value-text')[0];
    const summaryFinal = document.querySelectorAll('.summary-item .value-text')[1];
    const progressBar = document.querySelector('.progress-bar-fill');

    function calculateCAGR() {
        const pv = parseFloat(initialInput.value) || 0;
        const fv = parseFloat(finalInput.value) || 0;
        const n = parseFloat(durationInput.value) || 0;

        let cagr = 0;

        if (pv > 0 && n > 0 && fv > 0) {
            cagr = (Math.pow((fv / pv), (1 / n)) - 1) * 100;
        }

        cagrOutput.textContent = isNaN(cagr) ? "0%" : `${cagr.toFixed(1)}%`;

        summaryInitial.textContent = pv.toLocaleString('en-IN');
        summaryFinal.textContent = fv.toLocaleString('en-IN');

        const progressWidth = Math.min(Math.max(cagr, 0), 100);
        progressBar.style.width = `${progressWidth}%`;
    }

    function updateSliderFill(slider) {
        const val = parseFloat(slider.value);
        const min = parseFloat(slider.min) || 0;
        const max = parseFloat(slider.max) || 100;
        const percentage = ((val - min) / (max - min)) * 100;

        slider.style.background = `linear-gradient(to right, rgb(98, 105, 229) 0%, rgb(98, 105, 229) ${percentage}%, #eee ${percentage}%, #eee 100%)`;
    }

    function syncElements(slider, input) {
        slider.addEventListener('input', function () {
            input.value = slider.value;
            updateSliderFill(slider);
            calculateCAGR();
        });

        input.addEventListener('input', function () {
            slider.value = input.value;
            updateSliderFill(slider);
            calculateCAGR();
        });
    }

    syncElements(initialSlider, initialInput);
    syncElements(finalSlider, finalInput);
    syncElements(durationSlider, durationInput);

    updateSliderFill(initialSlider);
    updateSliderFill(finalSlider);
    updateSliderFill(durationSlider);
    calculateCAGR();
});