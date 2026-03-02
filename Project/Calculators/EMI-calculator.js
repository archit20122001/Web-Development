document.addEventListener("DOMContentLoaded", function () {
    const loanInput = document.getElementById('loan-amount-input');
    const loanSlider = document.getElementById('loan-amount-slider');

    const rateInput = document.getElementById('interest-rate-input');
    const rateSlider = document.getElementById('interest-rate-slider');

    const tenureInput = document.getElementById('tenure-input');
    const tenureSlider = document.getElementById('tenure-slider');

    const emiResult = document.getElementById('emi-result');
    const principalResult = document.getElementById('principal-result');
    const interestResult = document.getElementById('interest-result');
    const totalResult = document.getElementById('total-result');

    const tabs = document.querySelectorAll('.tab');

    function calculateEMI() {
        const p = parseFloat(loanInput.value) || 0;
        const annualRate = parseFloat(rateInput.value) || 0;
        const years = parseFloat(tenureInput.value) || 0;

        const r = annualRate / 12 / 100;
        const n = years * 12;

        let emi = 0;
        let totalAmount = 0;
        let totalInterest = 0;

        if (p > 0 && n > 0) {
            if (r === 0) {
                emi = p / n;
            } else {
                emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            }

            totalAmount = emi * n;
            totalInterest = totalAmount - p;
        }

        emiResult.textContent = `₹${Math.round(emi).toLocaleString('en-IN')}`;
        principalResult.textContent = `₹${Math.round(p).toLocaleString('en-IN')}`;
        interestResult.textContent = `₹${Math.round(totalInterest).toLocaleString('en-IN')}`;
        totalResult.textContent = `₹${Math.round(totalAmount).toLocaleString('en-IN')}`;
    }

    function updateSliderFill(slider) {
        const val = parseFloat(slider.value);
        const min = parseFloat(slider.min) || 0;
        const max = parseFloat(slider.max) || 100;
        const percentage = ((val - min) / (max - min)) * 100;

        slider.style.background = `linear-gradient(to right, #325a48 0%, #325a48 ${percentage}%, #e0e0e0 ${percentage}%, #e0e0e0 100%)`;
    }

    function syncElements(slider, input) {
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

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    syncElements(loanSlider, loanInput);
    syncElements(rateSlider, rateInput);
    syncElements(tenureSlider, tenureInput);

    updateSliderFill(loanSlider);
    updateSliderFill(rateSlider);
    updateSliderFill(tenureSlider);

    calculateEMI();
});