let color1 = document.getElementById("color");
let code=document.getElementById("hdcode");
var chooser; 

var printer;


function colorchanger(){
  chooser = Math.floor(Math.random() * 999999);
printer=(color1.style.backgroundColor = `#${chooser}`);
code.innerText=`#${chooser}`;
}


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
