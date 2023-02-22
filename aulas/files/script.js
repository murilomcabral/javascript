let controler = document.querySelector('#scrollbarbutton>strong').innerHTML
document.querySelector("button#scrollbarbutton").style.background = "green";
document.querySelector("button#scrollbarbutton").style.color = "white";

function scrollButton() {
   if (controler != "On") {
      document.querySelector("button#scrollbarbutton").style.background = "green";
      document.querySelector("button#scrollbarbutton").style.color = "white";
      document.querySelector("#scrollbarbutton>strong").innerHTML = "On";
      controler = "On";
      // esconder barra de rolagem (scrollbar)
   } else {
      document.querySelector("button#scrollbarbutton").style.background = "#d00";
      document.querySelector("button#scrollbarbutton").style.color = "white";
      document.querySelector("#scrollbarbutton>strong").innerHTML = "Off";
      controler = "Off";
      // esconder barra de rolagem (scrollbar)
   }
}