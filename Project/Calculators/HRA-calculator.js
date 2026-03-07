document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('.value-input');
    const basicSalaryInput = inputs[0];
    const daInput = inputs[1];
    const hraReceivedInput = inputs[2];
    const rentPaidInput = inputs[3];
    const metroRadios = document.querySelectorAll('input[name="metro-city"]');
    const basicSalarySlider = document.getElementById('basic-salary-slider');
    const daSlider = document.getElementById('dearness-allowance-slider');
    const hraReceivedSlider = document.getElementById('hra-received-slider');
    const rentPaidSlider = document.getElementById('rent-paid-slider');
    const outputValues = document.querySelectorAll('.HRA-value');
    const exemptedHRADisplay = outputValues[0];
    const taxableHRADisplay = outputValues[1];
    function calculateHRA() {
        const basic = parseFloat(basicSalaryInput.value) || 0;
        const da = parseFloat(daInput.value) || 0;
        const hraReceived = parseFloat(hraReceivedInput.value) || 0;
        const rentPaid = parseFloat(rentPaidInput.value) || 0;
        let isMetro = false;
        metroRadios.forEach(radio => {
            if (radio.checked && radio.value === 'yes') {
                isMetro = true;
            }
        });
        const totalSalary = basic + da;
        const condition1 = hraReceived;
        const condition2 = isMetro ? (totalSalary * 0.5) : (totalSalary * 0.4);
        const condition3 = Math.max(0, rentPaid - (totalSalary * 0.1));
        let exemptedHRA = Math.min(condition1, condition2, condition3);
        let taxableHRA = hraReceived - exemptedHRA;

        exemptedHRADisplay.textContent = `₹ ${Math.round(exemptedHRA).toLocaleString('en-IN')}`;
        taxableHRADisplay.textContent = `₹ ${Math.round(taxableHRA).toLocaleString('en-IN')}`;
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
            calculateHRA();
        });

        input.addEventListener('input', function () {
            slider.value = input.value;
            updateSliderFill(slider);
            calculateHRA();
        });
    }

    metroRadios.forEach(radio => {
        radio.addEventListener('change', calculateHRA);
    });

    syncElements(basicSalarySlider, basicSalaryInput);
    syncElements(daSlider, daInput);
    syncElements(hraReceivedSlider, hraReceivedInput);
    syncElements(rentPaidSlider, rentPaidInput);

    updateSliderFill(basicSalarySlider);
    updateSliderFill(daSlider);
    updateSliderFill(hraReceivedSlider);
    updateSliderFill(rentPaidSlider);
    calculateHRA();
});