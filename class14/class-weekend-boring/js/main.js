//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value

//   if(day === "tuesday" || day === "thursday"){
//     console.log("YOU HAVE CLASS")
//   }else if( day === "saturday" || day === "sunday"){
//     console.log("Its The Weekend")
//   }else{
//     console.log("BORING")
//   }

// }

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === 'tuesday' || day === 'thursday') {
    document.querySelector('#placeToSee').innerHTML = 'YOU HAVE CLASS'
  } else if (day === 'saturday' || day === 'sunday') {
    document.querySelector('#placeToSee').innerHTML = 'ITS THE WEEKEND'
  } else if (day === 'wednesday') {
    document.querySelector('#placeToSee').innerHTML = 'HUMP DAY'
  } else {
    document.querySelector('#placeToSee').innerHTML ='BORINGGGGG'
  }
}