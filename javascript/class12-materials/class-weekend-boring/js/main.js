document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
if (day == 'tuesday' || day == 'thursday') {
  document.querySelector('#placeToSee').innerHTML = "It's a class day!"
} else if (day == 'saturday' || day == 'sunday') {
  document.querySelector('#placeToSee').innerHTML = "It's the weekend!"
} else {
  document.querySelector('#placeToSee').innerHTML = "Boringgggg!"
}

}
