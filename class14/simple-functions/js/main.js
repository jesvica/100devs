//create a function that adds two numbers and alerts the sum
function add(num1,num2){
    alert(num1 + num2);
};

add(1,2);

//create a function that multiplys three numbers and console logs the product
function multiply(num1,num2,num3) {
    // another way or writing, good for readability
    // const product = num1 * num2 * num3 
    console.log(num1 * num2 * num3)
}

multiply(3,4,5)

//create a function that divides two numbers and returns the ???
function divide(num1,num2) {
    //return does not print to the console etc. must console log
    return num1 % num2
}
console.log(divide(50,4))
