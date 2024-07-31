document.getElementById('spring').onclick = makeSpring
document.getElementById('summer').onclick = makeSummer
document.getElementById('autumn').onclick = makeAutumn
document.getElementById('winter').onclick = makeWinter
document.getElementById('reset').onclick = reset

function reset() {
    document.querySelector('body').style.backgroundImage = "url(images/gradient.jpg)"
    document.querySelector('ul').style.color = 'white'
    document.querySelector('h1').style.color = 'white'
    document.querySelector('span').style.color = 'white'
    document.querySelector('li').style.borderColor = 'white'
    document.querySelector('li+li').style.border = '2px solid white'
    document.querySelector('li+li+li').style.border = '2px solid white'
    document.querySelector('li+li+li+li').style.border = '2px solid white'
    document.querySelector('#reset').style.border = '2px solid white'
}

function makeSpring() {
    document.querySelector('body').style.backgroundImage = "url(images/spring-img.jpg)"
    document.querySelector('ul').style.color = 'white'
    document.querySelector('h1').style.color = 'white'
    document.querySelector('span').style.color = 'white'
    document.querySelector('li').style.border = '2px solid white'
    document.querySelector('li+li').style.border = '2px solid white'
    document.querySelector('li+li+li').style.border = '2px solid white'
    document.querySelector('li+li+li+li').style.border = '2px solid white'
    ocument.querySelector('#reset').style.border = '2px solid white'
}

function makeSummer() {
    document.querySelector('body').style.backgroundImage = "url(images/summer-img.jpg)"
    document.querySelector('ul').style.color = 'white'
    document.querySelector('h1').style.color = 'white'
    document.querySelector('span').style.color = 'white'
    document.querySelector('li').style.border = '2px solid white'
    document.querySelector('li+li').style.border = '2px solid white'
    document.querySelector('li+li+li').style.border = '2px solid white'
    document.querySelector('li+li+li+li').style.border = '2px solid white'
    ocument.querySelector('#reset').style.border = '2px solid white'
}

function makeAutumn() {
    document.querySelector('body').style.backgroundImage = "url(images/autumn-img.jpg)"
    document.querySelector('ul').style.color = 'white'
    document.querySelector('h1').style.color = 'white'
    document.querySelector('span').style.color = 'white'
    document.querySelector('li').style.border = '2px solid white'
    document.querySelector('li+li').style.border = '2px solid white'
    document.querySelector('li+li+li').style.border = '2px solid white'
    document.querySelector('li+li+li+li').style.border = '2px solid white'
    ocument.querySelector('#reset').style.border = '2px solid white'
}

function makeWinter() {
    document.querySelector('body').style.backgroundImage = "url(images/winter-img.jpg)"
    document.querySelector('ul').style.color = 'black'
    document.querySelector('h1').style.color = 'black'
    document.querySelector('span').style.color = 'black'
    document.querySelector('li').style.border = '2px solid black'
    document.querySelector('li+li').style.border = '2px solid black'
    document.querySelector('li+li+li').style.border = '2px solid black'
    document.querySelector('li+li+li+li').style.border = '2px solid black'
    document.querySelector('#reset').style.border = '2px solid black'
}

