document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value


  //Conditionals go here
if (day == "Tuesday" || day == "Thursday" || day == "Tuesday".toLowerCase() || day == "Tuesday".toUpperCase() || day == "Thursday".toLowerCase() || day == "Thursday".toUpperCase()) {
  console.log("It's a class day")
  document.getElementById("placeToSee").innerHTML = "It's a class day!";
} else if (day == "Saturday" || day == "Sunday" || day == "Saturday".toUpperCase() || day == "Saturday".toLowerCase() || day == "Sunday".toUpperCase() || day == "Sunday".toLowerCase()) {
  console.log("It's the weekend!")
  document.getElementById("placeToSee").innerHTML = "It's the weekend!";
} else {
  console.log("Boring!!")
  document.getElementById("placeToSee").innerHTML = "BORINGGGGGG";
}
}
