document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('.value-input');
    const loanAmount = inputs[0];
    const interestRateInput = inputs[1]; 
    const tenureInput = inputs[2];       

    const loanSlider = document.getElementById('loan-amount-slider');
    const interestRateSlider = document.getElementById('interest-rate-slider');
    const tenureSlider = document.getElementById('loan-tenure-slider');

    const emiResult = document.querySelector('.EMI-value');
    const summaryTexts = document.querySelectorAll('.value-text');
    const principalAmount = summaryTexts[0];
    const totalInterestDisplay = summaryTexts[1]; 
    const totalAmountDisplay = summaryTexts[2];   

    function calculateEMI() {
        const p = parseFloat(loanAmount.value) || 0;
        const annualRate = parseFloat(interestRateInput.value) || 0;
        const years = parseFloat(tenureInput.value) || 0;

        let e = 0;
        let totalInterest = 0;
        let totalAmount = 0;

        if (p > 0 && annualRate > 0 && years > 0) {
            const r = annualRate / 12 / 100;
            const n = years * 12;
            e = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

            totalAmount = e * n;
            totalInterest = totalAmount - p;
        }

        emiResult.textContent = Math.round(e).toLocaleString('en-IN');
        principalAmount.textContent = Math.round(p).toLocaleString('en-IN');
        totalInterestDisplay.textContent = Math.round(totalInterest).toLocaleString('en-IN');
        totalAmountDisplay.textContent = Math.round(totalAmount).toLocaleString('en-IN');
    }

    function updateSliderFill(slider) {
        if (!slider) return;
        const val = parseFloat(slider.value);
        const min = parseFloat(slider.min) || 0;
        const max = parseFloat(slider.max) || 100;
        const percentage = ((val - min) / (max - min)) * 100;

        slider.style.background = `linear-gradient(to right, #3b71ca 0%, #3b71ca ${percentage}%, #e0e0e0 ${percentage}%, #e0e0e0 100%)`;
    }

    function syncElements(slider, input) {
        if (!slider || !input) return;

        slider.addEventListener('input', function () {
            input.value = slider.value;
            updateSliderFill(slider);
            calculateEMI();
        });

        input.addEventListener('input', function () {
            slider.value = input.value;
            updateSliderFill(slider);
            calculateEMI();
        });
    }

    syncElements(loanSlider, loanAmount);
    syncElements(interestRateSlider, interestRateInput);
    syncElements(tenureSlider, tenureInput);

    updateSliderFill(loanSlider);
    updateSliderFill(interestRateSlider);
    updateSliderFill(tenureSlider);
    calculateEMI();
});