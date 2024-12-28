// Convert Celsius to Fahrenheit
const convertCelsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheit.toFixed(2)}°F.`);
};

// Convert Fahrenheit to Celsius
const convertFahrenheitToCelsius = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C.`);
};

convertCelsiusToFahrenheit(100);
convertFahrenheitToCelsius(32);
