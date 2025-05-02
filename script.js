let startTime, interval;
let running = false;

const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const millisecondsSpan = document.getElementById("milliseconds");

document.getElementById("startBtn").addEventListener("click", () => {
  if (!running) {
    startTime = Date.now() - (window.elapsedTime || 0);
    interval = setInterval(updateTime, 10);
    document.getElementById("startBtn").textContent = "Pause";
    running = true;
  } else {
    clearInterval(interval);
    window.elapsedTime = Date.now() - startTime;
    document.getElementById("startBtn").textContent = "Start";
    running = false;
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  clearInterval(interval);
  running = false;
  window.elapsedTime = 0;
  hoursSpan.textContent = "00";
  minutesSpan.textContent = "00";
  secondsSpan.textContent = "00";
  millisecondsSpan.textContent = "000";
  document.getElementById("startBtn").textContent = "Start";
});

function updateTime() {
  const elapsed = Date.now() - startTime;
  const hrs = Math.floor(elapsed / 3600000);
  const mins = Math.floor((elapsed % 3600000) / 60000);
  const secs = Math.floor((elapsed % 60000) / 1000);
  const ms = elapsed % 1000;

  hoursSpan.textContent = String(hrs).padStart(2, '0');
  minutesSpan.textContent = String(mins).padStart(2, '0');
  secondsSpan.textContent = String(secs).padStart(2, '0');
  millisecondsSpan.textContent = String(ms).padStart(3, '0');
}
