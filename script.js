let controler = document.querySelector('#scrollbarbutton>strong').innerHTML
document.querySelector("button#scrollbarbutton").style.background = "green";
document.querySelector("button#scrollbarbutton").style.color = "white";

function scrollButton() {
   if (controler != "On") {
      document.querySelector("button#scrollbarbutton").style.background = "green";
      document.querySelector("button#scrollbarbutton").style.color = "white";
      document.querySelector("#scrollbarbutton>strong").innerHTML = "On";
      controler = "On";
      document.body.style.overflow = "visible";
   } else {
      document.querySelector("button#scrollbarbutton").style.background = "#d00";
      document.querySelector("button#scrollbarbutton").style.color = "white";
      document.querySelector("#scrollbarbutton>strong").innerHTML = "Off";
      controler = "Off";
      document.body.style.overflow = "?";
   }
}