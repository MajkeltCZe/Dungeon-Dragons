const hide = document.getElementById("img");
const hiding = document.getElementById("id");
hide.addEventListener("mouseenter", function () {

  hide.src = "../img/void.png";
  hiding.style.visibility = "visible" ;

});

hiding.addEventListener("mouseleave", function () {
  
    hide.src = "../img/arrow.png";
  hiding.style.visibility  = "hidden";

});
