//Create a function that has a loop that prints '21' 21 times to the console and then call that function
// for(let i=21; i<=21;i++) {
//     console.log(i)
// }

 function twentyone() {
        for(let i=1; i<=21;i++) {
        document.querySelector('#savageSays').innerText += ' 21'
    }
 }
twentyone()

//Bonus can you make it print '21' 21 times to the dom?
//document.querySelector('#savageSays').innerHTML