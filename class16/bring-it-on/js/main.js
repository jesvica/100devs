// *Variables*
// Create a variable and console log the value
let num = 10
console.log(num)

// Create a variable, add 10 to it, and alert the value
let thisVar = 10;
thisVar += 10
alert(thisVar)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function fourNums(num1,num2,num3,num4) {
   alert(num1 - num2 - num3 - num4)
}
fourNums(10,1,1,1)

// Create a function that divides one number by another and returns the remainder
function divideOneNum(no1,no2) {
    return no1 % no2
}
console.log(divideOneNum(10,4))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(n1,n2){
    if(n1 + n2 > 50) {
        alert('Jumanji')
    }
}
addTwoNums(60,1)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNums(uno,dos,tres) {
    let product = uno * dos * tres
    if(product % 3 === 0){
        alert('Zebra')
    }
}
multiplyThreeNums(10,3,1)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordAndNum(word,number) {

    for(let i = 1; i<=number; i++) {
        console.log(word)
    }
}
wordAndNum('hello',10)