document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
if (day == "Tuesday".toLowerCase() || day == "Thursday".toLowerCase()) {
  console.log("It's a class day")
  document.getElementById("placeToSee").innerHTML = "It's a class day!";
} else if (day == "saturday" || day == "sunday") {
  console.log("It's the weekend!")
  document.getElementById("placeToSee").innerHTML = "It's the weekend!";
} else {
  console.log("Boring!!")
  document.getElementById("placeToSee").innerHTML = "BORINGGGGGG";
}
}
