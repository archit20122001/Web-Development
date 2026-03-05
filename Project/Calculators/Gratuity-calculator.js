document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('.value-input');
    const salaryInput = inputs[0];
    const tenureInput = inputs[1];

    const salarySlider = document.getElementById('monthly-salary-slider');
    const tenureSlider = document.getElementById('service-slider');

    const gratuityResult = document.querySelector('.gratuity-value');

    const summaryTexts = document.querySelectorAll('.value-text');
    const summarySalary = summaryTexts[0];
    const summaryTenure = summaryTexts[1];

    function calculateGratuity() {
        const b = parseFloat(salaryInput.value) || 0;
        const n = parseFloat(tenureInput.value) || 0;

        let g = 0;

        if (b > 0 && n > 0) {
            g = (n * b * 15) / 26;
        }

        gratuityResult.textContent = Math.round(g).toLocaleString('en-IN');
        summarySalary.textContent = b.toLocaleString('en-IN');
        summaryTenure.textContent = n;
    }

    function updateSliderFill(slider) {
        const val = parseFloat(slider.value);
        const min = parseFloat(slider.min) || 0;
        const max = parseFloat(slider.max) || 100;
        const percentage = ((val - min) / (max - min)) * 100;

        slider.style.background = `linear-gradient(to right, #3b71ca 0%, #3b71ca ${percentage}%, #e0e0e0 ${percentage}%, #e0e0e0 100%)`;
    }

    function syncElements(slider, input) {
        slider.addEventListener('input', function () {
            input.value = slider.value;
            updateSliderFill(slider);
            calculateGratuity();
        });

        input.addEventListener('input', function () {
            slider.value = input.value;
            updateSliderFill(slider);
            calculateGratuity();
        });
    }

    syncElements(salarySlider, salaryInput);
    syncElements(tenureSlider, tenureInput);

    updateSliderFill(salarySlider);
    updateSliderFill(tenureSlider);

    calculateGratuity();
});