const dog = document.getElementById('dog'); 
var turn = false;



dog.addEventListener ('click',  () => {
   
   if (turn == false) {
    dog.src =  "../img/characters/blink-dog.jpeg";
    turn = true;
   
}

   else {
    dog.src =  "../img/characters/frejda.jpg";
  
    turn = false;
   }
});

