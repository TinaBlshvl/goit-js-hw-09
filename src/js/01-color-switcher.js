const startBtn = document.getElementById("btn-start");
const stopBtn = document.getElementById("btn-stop");
const body = document.querySelector("body");

let intervalId = null;

startBtn.addEventListener("click", handleStart)
stopBtn.addEventListener("click", handleStop)

function bodyColor() {
    body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function handleStart() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    intervalId = setInterval(bodyColor, 1000);
    alert("The game is working!")
}

function handleStop() {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    clearInterval(bodyColor)
    alert("The game has been stopped!")
}



