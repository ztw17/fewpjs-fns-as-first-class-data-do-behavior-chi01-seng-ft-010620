/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let hour = parseInt(time.split(":")[0])
  if (hour < 12) {
    return "Good Morning"
  } else if (hour > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

function displayMessage(time) {
  let element = document.getElementById("greeting")
  element.innerText = time;
}