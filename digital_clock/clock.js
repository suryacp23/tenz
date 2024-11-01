let clock = document.getElementById("clock");
function time() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let hourDisplay = hours > 12 ? `0${hours - 12}` : hours;
  let minuteDisplay = minutes < 10 ? `0${minutes}` : minutes;
  let secondDisplay = seconds < 10 ? `0${seconds}` : seconds;
  let timer = `${hourDisplay}:${minuteDisplay}:${secondDisplay}`;
  clock.innerText = timer;
}
setInterval(() => time(), 1000);
