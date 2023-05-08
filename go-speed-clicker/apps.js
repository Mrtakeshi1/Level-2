const button = document.getElementById("button")
const counter = document.getElementById("counter")


button.addEventListener('click', function(){
    if (countContainer.textContent !== '0'){
    counter.textContent = Number(counter.textContent) + Number(1)
    localStorage.setItem("timesClicked" , counter.textContent)
}})

let count = localStorage.timesClicked
counter.textContent = count

const countContainer = document.getElementById("time");
const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("resetBtn");

var remainingTime = 15;

var timer;

var isStopped = true;


const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    countContainer.innerHTML = remainingTime;
    timer = setInterval(renderTime, 1500);
  }
};


const resetTimer = () => {
  isStopped = true;
  clearInterval(timer);
  remainingTime = 15;
  countContainer.innerHTML = remainingTime;
};

startButton.onclick = startTimer;
resetButton.onclick = resetTimer;

const renderTime = () => {
  remainingTime -= 1;
  countContainer.innerHTML = remainingTime;
  if (remainingTime === 0) {
    isStopped = true;
    clearInterval(timer);
    remainingTime = 15;
  }
};