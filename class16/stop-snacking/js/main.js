//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking() {
    let numOfSnacks = Number(document.querySelector('input').value) //grabbing num of snacks from input
    
    document.querySelector('#stops').innerText = "" //empties the text each time #help runs

    for(let i = 1; i <= numOfSnacks; i++) {
        document.querySelector('#stops').innerText += ' Stop'
    }
}


// document.getElementById('#stops').innerText += 'Stop'