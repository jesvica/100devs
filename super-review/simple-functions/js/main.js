//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwo(num1, num2) {
    alert(num1 - num2);
}
subTwo(10, 5);

//create a function that divides three numbers and console logs the quotient
function divideThree(n1, n2, n3) {
    console.log(n1/n2/n3);
}
divideThree(12, 4, 3);

//create a function that multiplys three numbers and returns the product
function multiplyThree(no1, no2, no3) {
    return no1 * no2 * no3;
}

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function mathstuff(int1, int2, int3) {
    let addTwo = int1 + int2;
    return addTwo % int3;
}
console.log(mathstuff(20, 30, 40));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function moreMath(iOne, iTwo, iThree, iFour) {
    let multiplyFirstTwo = iOne * iTwo;
    if (multiplyFirstTwo > 100) {
        console.log(iThree + iFour);
    } else if (multiplyFirstTwo < 100) {
        console.log(iThree - iFour)
    } else if (multiplyFirstTwo === 100) {
        alert((iOne * iTwo * iThree) % iFour)
    }
}
moreMath(10, 20, 30, 40);