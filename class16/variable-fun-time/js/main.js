//--- Easy
//create a variable and assign it a number
let number = 11;
//minus 10 from that number
number = number - 10;
//print that number to the console
console.log(number)
//--- Medium
//create a variable that holds a value from the input
let thisVariable = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
thisVariable = thisVariable + 25;
//alert that number
alert(thisVariable)
//--- Hard
//create a variable that holds the h1
const h1Holder = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener('click', sum)

function sum() {
    console.log(number + thisVariable)
}