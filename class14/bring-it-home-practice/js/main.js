// *Variables*
// Create a variable and console log the value
var word = 'hello'
console.log(word)

// Create a variable, add 10 to it, and alert the value
let number = 5;
number = number + 10;
alert(number)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNums(n1,n2,n3,n4) {
    subtractFourNums = n1 - n2 - n3 - n4
}

// Create a function that divides one number by another and returns the remainder
function dividesOneNumber(num1,num2) {
    return num1 % num2
}
console.log(dividesOneNumber(50,4))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(no1,no2) {
    addTwoNums = no1 + no2;

    if (addTwoNums > 50) {
        alert('Jumanji!')
    }
}
addTwoNums(49, 31)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNums(m1,m2,m3) {
    multiplyThreeNums = m1 * m2 * m3;

    if (multiplyThreeNums % 3 === 0) {
        alert('ZEBRA')
    } else {
        console.log('Number is not divisible by 3')
    }
}

multiplyThreeNums(1,0.7,8)