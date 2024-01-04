let hours = 0;
let minutes = 0;
let seconds = 0;
let running = false;
let interval;

const startStop = () => {
  if (!running) {
    running = true;
    document.getElementById("startStop").textContent = "Stop";
    interval = setInterval(updateStopwatch, 1000);
  } else {
    running = false;
    document.getElementById("startStop").textContent = "Start";
    clearInterval(interval);
  }
};

const reset = () => {
  running = false;
  document.getElementById("startStop").textContent = "Start";
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("display").textContent = "00:00:00";
};

const updateStopwatch = () => {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let displayHours = hours < 10 ? "0" + hours : hours;
  let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("display").textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
};
