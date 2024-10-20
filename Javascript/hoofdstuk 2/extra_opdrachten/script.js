function dobbelen() {
    const numRolls = parseInt(document.getElementById('rolls').value, 10);
    const results = Array(6).fill(0);

    for (let i = 0; i < numRolls; i++) {
        results[Math.floor(Math.random() * 6)]++;
    }

    displayResults(results, numRolls);
}

function displayResults(results, numRolls) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    results.forEach((count, index) => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.width = (count / numRolls * 100) + '%';
        bar.textContent = `${index + 1}: ${count} keer`;
        bar.style.backgroundColor = "red";
        resultDiv.appendChild(bar);
    });
}
