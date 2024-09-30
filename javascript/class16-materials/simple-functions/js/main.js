//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwo(num1, num2) {
    alert(num1 - num2)
}

subTwo(10,2)
//create a function that divides three numbers and console logs the quotient
function divideThree(no1, no2, no3) {
    console.log(no1 / no2 / no3)
}
divideThree(10,20,30)
//create a function that multiplys three numbers and returns the product
function multiplyNum(one, two, three) {
    return one * two * three;
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function takeThree(n1, n2, n3) {
    return (n1 + n2) % 3;
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function fourNums(j1, j2, j3, j4) {
    let m2 = j1 * j2;

    if (m2 > 100) {
        console.log(j3 + j4)
    } else if (m2 < 100) {
        console.log(j3 - j4);
    } else if (m2 === 100) {
        let mult3 = j1 * j2 * j3;
        alert(j4 & mult3)
    }
}