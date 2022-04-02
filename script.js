document.querySelector("#nAbout").onmouseover = function() {mouseOver()};
document.querySelector("#nAbout").onmouseout = function() {mouseOut()};

   function mouseOver() {
      document.querySelector("#nAbout").style.color = "white";
   }
   function mouseOut() {
      document.querySelector("#nAbout").style.color = "#aac0df";
   }