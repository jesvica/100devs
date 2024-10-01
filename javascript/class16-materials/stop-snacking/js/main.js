//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', stopSnacking);

function stopSnacking() {
    const stopTimes = Number(document.querySelector('input').value); 
    // Number ensures the input value is a number not a string
    // VALUE not innerText as value is the num

    // sets the inner text to be empty each time it's clicked, so we do not concatenat the results
    document.querySelector('#stops').innerHTML = '';

    for (let i = 1; i <= stopTimes; i++) {
        document.querySelector('#stops').innerHTML += ' Stop'
    }

}

