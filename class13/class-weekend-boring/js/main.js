//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    document.getElementById("placeToSee").innerHTML = "YOU HAVE CLASS";
  }else if( day === "saturday" || day === "sunday"){
    document.getElementById("placeToSee").innerHTML = "Its the weekend!";
  }else if (day === "wednesday") {
    document.getElementById("placeToSee").innerHTML = "Hump day!";
  }else{
    document.getElementById("placeToSee").innerHTML = "BORING";
  }

}
