function convertRate() {
    const originalRate = parseFloat(document.getElementById('original-rate').value.replace(',', '.'));
    const originalPeriod = document.getElementById('original-period').value;
    const targetPeriod = document.getElementById('target-period').value;

    if (isNaN(originalRate) || originalRate <= 0) {
        alert('Por favor, insira uma taxa original válida.');
        return;
    }

    const periodToDays = {
        day: 1,
        week: 7,
        fortnight: 14,
        month: 30,
        bimonth: 60,
        quarter: 90,
        semester: 180,
        year: 365
    };

    const originalRatePerDay = originalRate / periodToDays[originalPeriod];
    const targetRate = originalRatePerDay * periodToDays[targetPeriod];

    const resultElement = document.getElementById('result');
    const targetPeriodText = document.querySelector(`#target-period option[value="${targetPeriod}"]`).textContent.toLowerCase();

    resultElement.textContent = `${originalRate}% ao ${originalPeriod} equivale a ${targetRate.toFixed(2).replace('.', ',')}% por ${targetPeriodText}.`;

    showProgressBar();
}

function showProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = '0';
    progressBar.style.transition = 'width 2s';
    progressBar.style.backgroundColor = '#007BFF';
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 10);
}
