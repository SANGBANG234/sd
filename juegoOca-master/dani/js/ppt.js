let userScore= 0;
let compScore= 0;
const userScore_span= document.getElementById('user-score');
const compScore_span= document.getElementById('comp-score');
const scoreBoard_div= document.querySelector('marcador');



function jugar(obj) {
	// body...
	var objetos = ["Piedra", "Papel", "Tijera"];
	
	var jugada = [
		["EMPATASTE","PERDISTE","GANASTE"],
		["GANASTE","EMPATASTE","PERDISTE"],
		["PERDISTE","GANASTE","EMPATASTE"]
	];

	var enemigo = Math.floor(Math.random()*3);
	
	document.getElementById('jugador').innerHTML = ("Escogiste: ")+objetos[obj];
	document.getElementById('enemigo').innerHTML = ("La CPU escogio: ")+objetos[enemigo];
	document.getElementById('resultado').innerHTML= jugada[obj][enemigo]+("!!");

	

	if (jugada[obj][enemigo]=="GANASTE"){
		document.getElementById('user-score').innerHTML++;
		if (document.getElementById('user-score').innerHTML==5) {
			alert("Ganaste, regresa al Monopoly, porfavor")
		}
		
	}
	if (jugada[obj][enemigo]=="PERDISTE") {
		document.getElementById('comp-score').innerHTML++;
		if (document.getElementById('user-score').innerHTML<5 && document.getElementById('comp-score').innerHTML==5) {
			alert("Perdiste, regresa al Monopoly, porfavor")
		}
	}



}
