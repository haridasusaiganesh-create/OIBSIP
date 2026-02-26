function convertTemperature() {

    let tempInput = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    // Validate input
    if (tempInput === "" || isNaN(tempInput)) {
        result.innerHTML = "Please enter a valid number!";
        result.style.color = "red";
        return;
    }

    let temperature = parseFloat(tempInput);
    let convertedValue = "";

    if (unit === "celsius") {
        let fahrenheit = (temperature * 9/5) + 32;
        let kelvin = temperature + 273.15;
        convertedValue = `${temperature} °C = ${fahrenheit.toFixed(2)} °F | ${kelvin.toFixed(2)} K`;
    }

    else if (unit === "fahrenheit") {
        let celsius = (temperature - 32) * 5/9;
        let kelvin = celsius + 273.15;
        convertedValue = `${temperature} °F = ${celsius.toFixed(2)} °C | ${kelvin.toFixed(2)} K`;
    }

    else if (unit === "kelvin") {
        let celsius = temperature - 273.15;
        let fahrenheit = (celsius * 9/5) + 32;
        convertedValue = `${temperature} K = ${celsius.toFixed(2)} °C | ${fahrenheit.toFixed(2)} °F`;
    }

    result.innerHTML = convertedValue;
    result.style.color = "green";
}
