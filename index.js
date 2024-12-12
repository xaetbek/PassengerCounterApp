//function increment() {
//  console.log("The button was clicked")
//}
//
//function log() {
//  console.log(42)
//
//}
//
//log()
//
//let lap1 = 34
//let lap2 = 33
//let lap3 = 36
//
//function sum() {
//  let totalLapTime = lap1 + lap2 + lap3
//  console.log(totalLapTime)
//}

//sum()

//let lapsCompleted = 0
//
//function addLaps() {
//  lapsCompleted = lapsCompleted + 1
//}
//
//addLaps()
//addLaps()
//addLaps()
//
//console.log(lapsCompleted)

let count = 0

function increment() {
  count = count + 1
  document.getElementById("increment-btn").console.log(count)
}

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `INCREMENT ${event.detail}`;
});
