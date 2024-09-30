//Create a conditonal that checks their age
document.querySelector('h1').addEventListener('click', takeValue);

function takeValue() {
    const valOfInput = document.querySelector('#danceDanceRevolution').value;
    
    if (valOfInput < 16) {
        document.querySelector('p').innerHTML = "You can't drive";
    } else if (valOfInput < 18) {
        document.querySelector('p').innerHTML = "You can't hate from outside the club, you can't even get in";
    } else if (valOfInput < 21) {
        document.querySelector('p').innerHTML = "You can't drink";
    } else if (valOfInput < 25) {
        document.querySelector('p').innerHTML = "You cannot rent cars affordably";
    } else if (valOfInput < 30) {
        document.querySelector('p').innerHTML = "You can't rent fancy cars affordably";
    } else if (valOfInput >= 30) {
        document.querySelector('p').innerHTML = "You have nothing else to look forward to";
    }
}

// let age = 25;

// if (age < 16) {
//     document.querySelector('p').innerHTML = "You can't drive";
// } else if (age < 18) {
//     document.querySelector('p').innerHTML = "You can't hate from outside the club, you can't even get in";
// } else if (age < 21) {
//     document.querySelector('p').innerHTML = "You can't drink";
// } else if (age < 25) {
//     document.querySelector('p').innerHTML = "You cannot rent cars affordably";
// } else if (age < 30) {
//     document.querySelector('p').innerHTML = "You can't rent fancy cars affordably";
// } else if (age >= 30) {
//     document.querySelector('p').innerHTML = "You have nothing else to look forward to";
// }
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

// document.querySelector('h1').addEventListener('click', takeValue);

// function takeValue() {
//     let valOfInput = document.querySelector('#danceDanceRevolution').value;
// }