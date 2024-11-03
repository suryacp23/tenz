let clock = document.getElementById("clock");
let calender = document.getElementById("calender");
function time() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let dates = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hourDisplay = hours > 12 ? `0${hours - 12}` : hours;
  let minuteDisplay = minutes < 10 ? `0${minutes}` : minutes;
  let secondDisplay = seconds < 10 ? `0${seconds}` : seconds;

  let timer = `${hourDisplay}:${minuteDisplay}:${secondDisplay}`;
  let displaydate = dates < 10 ? `0${dates}` : dates;
  let Displaymonth = month < 10 ? `0${month}` : month;
  let display = `${displaydate}/${Displaymonth}/${year}`;

  clock.innerText = timer;
  calender.innerText = display;
}
setInterval(() => time(), 1000);
