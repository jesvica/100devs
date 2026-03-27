// *Variables*
// Create a variable and console log the value
let random = "hello";
console.log(random);
// Create a variable, add 10 to it, and alert the value
let add10 = 10;
alert(add10 += 10)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(one, two, three, four) {
    return one - two - three - four;
}
alert(subFour(10, 20, 30, 40));
// Create a function that divides one number by another and returns the remainder
function divide(num1, num2) {
    return num1 % num2;
}
console.log(divide(10, 7))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo(num1, num2) {
    let added = num1 + num2;
    if (added > 50) {
        alert("Jumanji")
    }
}
addTwo(100, 51)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(n1, n2, n3) {
    let multiplied = n1 * n2 * n3;
    if (multiplied % 3 === 0) {
        alert('ZEBRA');
    }
}
multiplyThree(3, 3, 3);
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNum(word, number) {
    for (let i = 0; i < number; i++) {
        console.log(word);
    }
}
wordNum("popsicle", 10);