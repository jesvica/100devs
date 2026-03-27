//Write your pseduo code first! 
// Convert to Fahrenheit

// Assign the button
let convertToFahrenheit = document.querySelector('#convertToFahrenheit');
// When the button is clicked
convertToFahrenheit.addEventListener("click", convertToF)

// get the temp in celsius from the dom
function convertToF() {
    let getCelsius = Number(document.getElementById('getCelsius').value);

    // convert it to fahrenheit
    let celsiusInFahrenheit = (getCelsius * 9/5) + 32;
    
    //display the result in the dom
    let displayCelcInFah = document.querySelector('#celcInFah')
    displayCelcInFah.innerHTML = celsiusInFahrenheit;
}


// Convert to Celsius
// Assign the button
let convertToCelsius = document.querySelector('#convertToCelsius');

// When the button is clicked
convertToCelsius.addEventListener('click', convertToC);

// get temp in fahrenheit from the dom
function convertToC() {
    let getFahrenheit = Number(document.getElementById('getFahrenheit').value);

    // convert it to celsius
    let getFahrenheitInCelsius = (getFahrenheit - 32) * 5/9;

    // display the result in the dom
    let displayFahInCelc = document.querySelector('#fahInCelc');
    displayFahInCelc.innerHTML = getFahrenheitInCelsius;
}


// console.log or display in dom