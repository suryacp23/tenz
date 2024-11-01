let timer = document.getElementById("time");

function clock() {
  for (let i = 10; i >= 1; i--) {
    setTimeout(() => {
      timer.innerText = i;
    }, (10 - i) * 1000);
  }
}
