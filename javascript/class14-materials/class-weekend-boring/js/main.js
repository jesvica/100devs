//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  if(day === "tuesday" || day === "thursday"){
    document.querySelector('#placeToSee').innerHTML = "You have class!"
  }else if( day === "saturday" || day === "sunday"){
    document.querySelector('#placeToSee').innerHTML = "It's the weekend!"
  } else if (day === "wednesday") {
    document.querySelector('#placeToSee').innerHTML = "It's humpday!"
  } else{
    document.querySelector('#placeToSee').innerHTML = "BORING"
  }

}
