//Write your pseduo code first! 
// I want to convert the temperature from celcius to farenheit
// get the temp in celcius, convert it when the button is pressed, print answer to the screen

document.querySelector('#yell').addEventListener('click', convert);

function convert() {
    //get the temp in celcius
    let temp = document.querySelector('#celcius').value
    //convert celcius to farenheit
    temp = (temp * 9/5) + 32;
    // print it to the screen
    document.querySelector('#placeToYell').innerHTML = temp;
}