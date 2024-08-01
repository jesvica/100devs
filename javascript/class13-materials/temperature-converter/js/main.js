// //Write your pseduo code first! 
document.querySelector('#calculate').addEventListener('click', convert)

function convert() {
    // get value in celsius
    let temp = document.querySelector('#celsius').value
    // convert it to farenheit
    temp = temp * 9/5 + 32
    // show in dom
    document.querySelector('#farenheit').innerText = temp
}



