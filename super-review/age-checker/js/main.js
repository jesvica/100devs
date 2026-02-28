// //Create a conditonal that checks their age
// let age = Number(document.querySelector('input').value);
// //If under 16, tell them they can not drive
// //If under 18, tell them they can't hate from outside the club, because they can't even get in
// //If under 21, tell them they can not drink
// //If under 25, tell them they can not rent cars affordably
// //If under 30, tell them they can not rent fancy cars affordably
// //If under over 30, tell them there is nothing left to look forward too
// if (age < 16) {
//     document.querySelector('p').innerHTML = "You cannot drive"
// } else if (age < 18) {
//     document.querySelector('p').innerHTML = "You can't hate from outside the club, you can't even get in";
// } else if (age < 21) {
//     document.querySelector('p').innerHTML = "You can't drink";
// } else if (age < 25){
//     document.querySelector('p').innerHTML = "You can't rent cars affordably";
// } else if (age < 30) {
//     document.querySelector('p').innerHTML = "You can't rent fancy cars affordably";
// } else if (age > 30) {
//     document.querySelector('p').innerHTML = "There is nothing left to look forward to";
// } else {
//     document.querySelector('p').innerHTML = "Thirty, flirty and thriving";
// }

// //--- Harder
// //On click of the h1
// let header = document.querySelector('h1');

// header.addEventListener('click', age);
// //Take the value from the input
// // let inputVal = document.querySelector('input').value;
// // console.log(inputVal);

// // function takeValue() {
// //     // let inputVal = document.querySelector('input').value;
// //     document.querySelector('p').innerHTML = ;
// // }
// //Place the result of the conditional in the paragraph


let header = document.querySelector('h1');

header.addEventListener('click', checkAge);

function checkAge() {
    let age = Number(document.querySelector('input').value);

    if (age < 16) {
        document.querySelector('p').innerHTML = "You cannot drive"
    } else if (age < 18) {
        document.querySelector('p').innerHTML = "You can't hate from outside the club, you can't even get in";
    } else if (age < 21) {
        document.querySelector('p').innerHTML = "You can't drink";
    } else if (age < 25){
        document.querySelector('p').innerHTML = "You can't rent cars affordably";
    } else if (age < 30) {
        document.querySelector('p').innerHTML = "You can't rent fancy cars affordably";
    } else if (age > 30) {
        document.querySelector('p').innerHTML = "There is nothing left to look forward to";
    } else {
        document.querySelector('p').innerHTML = "Thirty, flirty and thriving";
    }
}