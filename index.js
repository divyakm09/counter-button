let counter = 0;
let intervalID = null;
const element = document.getElementById("counter")
function startInterval() {
    intervalID = setInterval(function() {
        counter++;
        element.innerHTML = "Counter : "+counter
    },1000)
}

function startCounter() {
    console.log('start counter')
    startInterval()
}

function pauseCounter() {
    console.log("Pause Counter")
        clearInterval(intervalID)
        intervalID = null
}

function resetCounter() {
    console.log('reset Counter')
    element.innerText = "Counter : " + 0
    counter = 0
}