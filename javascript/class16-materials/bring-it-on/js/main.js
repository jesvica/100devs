// *Variables*
// Create a variable and console log the value
let thisVar = 10;
console.log(thisVar)
// Create a variable, add 10 to it, and alert the value
let anotherVar = 20;
anotherVar += 20;
//alert(anotherVar);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFour(num1, num2, num3, num4) {
    alert(n1 - n2 - n3 - n4);
}
// Create a function that divides one number by another and returns the remainder
function divideNum(n1, n2) {
    return n1 % n2;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo(a,b) {
    c = a + b;
    if (c > 30) {
        alert('Jumanji!')
    }
}

//addTwo(15,26)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(j1, j2, j3) {
    let value = j1 * j2 * j3;

    if (value % 3 == 0) {
        alert('ZEBRA');
    }
}

//multiplyThree(3,6,9)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNumber(word, num) {
    for (let i = 1; i <= num; i++) {
        console.log(word);
    }
}

wordNumber('hello', 5);