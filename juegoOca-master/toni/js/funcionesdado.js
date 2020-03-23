var x=1;
var y=0;
function rollDice(){
    var die1 = document.getElementById("die1");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    
    die1.innerHTML = d1;
    status.innerHTML = "Caiste en el minijuego: "+ d1 +".";
    tiro.innerHTML = "Tu numero de tiro es "+x+".";
    x = x+1;
    y = d1;
    if (x > 99){
    	alert("EL juego ha terminado");
    }
   
}
   
