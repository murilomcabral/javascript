let controler = document.querySelector('#scrollbarbutton>strong').innerHTML

if (controler == "On") {
   document.querySelector("button#scrollbarbutton").style.background = "green";
   document.querySelector("button#scrollbarbutton").style.color = "white";
} else {
   document.querySelector("button#scrollbarbutton").style.background = "#d00";
   document.querySelector("button#scrollbarbutton").style.color = "white";
}