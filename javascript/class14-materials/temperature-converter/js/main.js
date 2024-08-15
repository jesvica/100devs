// //Write your pseduo code first!
// document.querySelector('#convert').addEventListener('click', convert)

// function convert() {
//     // get the temperature in celsius
//     let temp = document.querySelector('#celsius').value

//     // convert it to fahrenheit
//     temp = temp * 9/5 + 32;

//     //print it to dom
//     document.querySelector('#farenheit').innerHTML = temp;
// }





document.querySelector('#convert').addEventListener('click', convert)

function convert() {
    // getting the input
    let celc = document.querySelector('#celsius').value

    //do the math
    let fahren = (celc * 9/5) + 32;
    //show it in the dom
    document.querySelector('#farenheit').innerHTML = fahren;
}