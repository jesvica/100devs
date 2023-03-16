//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract2nums(num1,num2) {
    alert(num1 - num2)
}
subtract2nums(10,5)
//create a function that divides three numbers and console logs the quotient
function divide3nums(no1,no2,no3) {
    console.log(no1 / no2 / no3)
}
divide3nums(10,5,1)
//create a function that multiplys three numbers and returns the product
function multiply3nums(n1,n2,n3) {
    return n1 * n2 * n3
}
console.log(multiply3nums(5,10,2));
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function threeNums(one,two,three) {
    return (one+two) % three;
}
console.log(threeNums(3,3,2))
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function fourNums(nm1,nm2,nm3,nm4){
    let twoNums = nm1 * nm2;
    if(twoNums > 100) {
        console.log(twoNums + (nm3 + nm4))
    } else if (twoNums < 100) {
        console.log(twoNums - (nm1 - nm2))
    } else if (twoNums === 100) {
        alert((nm1 * nm2 * nm3) % nm4)
    }
}