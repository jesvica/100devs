//Write your pseduo code first! 

// get the temperature in celcius, convert it to farenheit and show it on the screen

document.querySelector('#yell').addEventListener('click', convert)

function convert() {
    //need the value in celsius
    let temp = document.querySelector('#celcius').value;
    //convert from celcius to farenheit
    temp = temp * (9/5) + 32;
    // show it
    document.querySelector('#placeToYell').innerText = temp;
}