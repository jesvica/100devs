// *Variables*
// Declare a variable, assign it a value, and alert the value
let thisVariable = 10;
alert(thisVariable)
// Create a variable, divide it by 10, and console log the value
let divideByTen = 50;
divideByTen = divideByTen / 10;
console.log(divideByTen)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThreeNumbers(num1,num2,num3) {
    alert(num1 * num2 * num3)
}
multiplyThreeNumbers(3,4,5)
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fourNumbers(no1,no2,no3,no4){
    fourNumbers = (no1 + no2) - no3 - no4
    console.log(fourNumbers)
}
fourNumbers(5,4,3,2)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNums(n1,n2,n3) {
    threeNums = 100 + n1 - n2 / n3
    if (threeNums > 25){
        console.log('WE HAVE A WINNA')
    }
}
threeNums(100,50,10)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"


function dayOfTheWeek() {
     let day = prompt('What day of the week is it?')

    if(day === 'saturday' || day === 'sunday') {
        alert('weekend!')
    } else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
        alert('week day!')
    } else {
        alert('try again!')
    }
}
dayOfTheWeek()

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function takeInANum(number) {

    for(let i = 1; i <= number; i+= 3) {
        console.log(number)
    }
}
takeInANum(12)