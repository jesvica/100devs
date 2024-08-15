// *Variables*
// Create a variable and console log the value
let thisVariable = "Hi I'm a varible"
console.log(thisVariable)

// Create a variable, add 10 to it, and alert the value
let anotherVariable = 10;
anotherVariable += 10
alert(anotherVariable)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFour(a,b,c,d) {
    return a - b - c - d
}
alert(subtractFour(10,5,7,3))

// Create a function that divides one number by another and returns the remainder
function divide(num1,num2) {
    return num1 % num2
}
console.log(divide(65,7))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(hello1,hello2) {
    const add = hello1 + hello2;
    if(add > 50) {
        alert('Jumanji!')
    }
}
addTwoNums(40,50);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNums(no1,no2,no3){
    const threeNums = no1 * no2 * no3;
    if (threeNums % 3 == 0) {
        alert('Zebra!')
    }
}

multiplyThreeNums(3,2,2)