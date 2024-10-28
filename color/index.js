let color1 = document.getElementById("color");
let code=document.getElementById("hdcode");
let change ;


function colorchanger(){
 let chooser = Math.floor(Math.random() * 999999);
 change = `#${chooser}`;
 color1.style.background=change;
 code.innerText=change;

  }
  let para=colorchanger();



function copytext() {
  navigator.clipboard
    .writeText(change)
    .then(() => {
      alert("copied");
    })
    .catch((err) => {
      console.error("error");
    });
}
