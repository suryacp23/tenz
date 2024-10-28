let color1 = document.getElementById("color");
let chooser = Math.floor(Math.random() * 999999);

let print = (color1.style.backgroundColor = `#${chooser}`);

function copytext() {
  navigator.clipboard
    .writeText(print)
    .then(() => {
      alert("copied");
    })
    .catch((err) => {
      console.error("error");
    });
}
