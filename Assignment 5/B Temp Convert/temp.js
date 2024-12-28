function convertToCelsius() {
    const temp = parseFloat(document.getElementById('tempInput').value);
    if (!isNaN(temp)) {
        const celsius = (temp - 32) * (5/9);
        document.getElementById('result').textContent = `${temp} Fahrenheit is equal to ${celsius.toFixed(2)} Celsius.`;
    } else {
        alert('Please enter a valid number.');
    }
}

function convertToFahrenheit() {
    const temp = parseFloat(document.getElementById('tempInput').value);
    if (!isNaN(temp)) {
        const fahrenheit = (temp * 9/5) + 32;
        document.getElementById('result').textContent = `${temp} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit.`;
    } else {
        alert('Please enter a valid number.');
    }
}