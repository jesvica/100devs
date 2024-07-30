document.getElementById('spring').onclick = makeSpring
document.getElementById('summer').onclick = makeSummer
document.getElementById('autumn').onclick = makeAutumn
document.getElementById('winter').onclick = makeWinter
document.getElementById('reset').onclick = reset

function makeSpring() {
    document.querySelector('body').style.backgroundImage = "url(images/spring-img.jpg)"
}

function makeSummer() {
    document.querySelector('body').style.backgroundImage = "url(images/summer-img.jpg)"
}

function makeAutumn() {
    document.querySelector('body').style.backgroundImage = "url(images/autumn-img.jpg)"
}

function makeWinter() {
    document.querySelector('body').style.backgroundImage = "url(images/winter-img.jpg)"
}

function reset() {
    document.querySelector('body').style.backgroundImage = "url(images/gradient.jpg)"
}