// *Variables*
// Create a variable and console log the value
let thisVar = 12;
console.log(thisVar)
// Create a variable, add 10 to it, and alert the value
let add10 = 20;
add10 + 10;
alert(add10)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNums(n1,n2,n3,n4) {
    subtractFourNums = n1 - n2 - n3 - n4
    alert(subtractFourNums)
}
subtractFourNums(10,1,2,3)
// Create a function that divides one number by another and returns the remainder
function divideOneNum(no1,no2) {
    return no1 % no2
}
console.log(divideOneNum(10,4))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(num1,num2){
    if(num1 + num2 > 50) {
        alert('Jumanji!')
    }
}
addTwoNums(60,5)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNums(number1,number2,number3) {
    multiplyThreeNums = number1 * number2 * number3

    if(multiplyThreeNums / 3) {
        alert('ZEBRA')
    }
}
multiplyThreeNums(5,10,3)