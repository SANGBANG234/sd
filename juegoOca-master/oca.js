var jugadores = [0];//Número de jugadores
var numTurnos = jugadores.length;
var tablero;//Asignar el canvas del html.
var contexto;//Asignar el contexto del canvas
var o ;//Casilla para la roja
var p ;//Casilla para la amarilla.
var tiros=10;
var rojaX, rojaY, amarillaX, amarillaY;//Coordenadas de las fichas.
//var dado = [1,2,3,4,5,6];
var turno;//Quien tira el dado.
var turnoRoja = false;
var score=0;
var movimiento = 0;//Indica el avance o retroceso de la ficha que tiene el turno.
var turnosPerdidosRoja = 0;
var turnosPerdidosAmarilla = 0;
var turnosPerdidos = turnosPerdidosRoja + turnosPerdidosAmarilla;
/***************************************************************************/

function iniciar(){
	
	tablero = document.getElementById('tablero');
	tablero.width = 1007;
	tablero.height = 653;
	contexto = tablero.getContext("2d");

	//Asignar las imagenes a sus objetos.
	fondo.imagen = new Image();//Una nueva imagen a la propiedad imagen del objeto fondo.
	fondo.imagen.src = fondo.imagenURL;//La dirección de la imagen.
	fondo.imagen.onload = confirmarFondo;//La carga de la imagen.
}
//Crear los objetos con las imagenes.
	var fondo = {
		imagenURL: "imagenes/tableroa.png"
	};
//Confirmar la carga de las imágenes.
	function confirmarFondo(){
		fondo.imagenOK = true;
		dibujarFondo();
		dibujarFichaRoja();
		
	}
function dibujarFondo(){
	var contexto = this.contexto;
	contexto.drawImage(fondo.imagen, 0,0);

}
function dibujarFichaRoja(){
	contexto.beginPath();
	contexto.arc(rojaX, rojaY, 15, 0, Math.PI *2, true);
	contexto.fillStyle = "#F00";
	contexto.fill();
	contexto.lineWidth = 3;
	contexto.strokeStyle = "black";
	contexto.stroke();
	contexto.closePath();
}

//Posiciones ficha roja.
	var casillasRoja = [[],[125,300],[125,580],[508,580],[895,580],[895,80],[510,80],[125,80]];

	


function situaFichas(){
	var posicionRoja = casillasRoja[o];
	rojaX = posicionRoja[0];
	rojaY = posicionRoja[1];
}
function moverFichaRoja(){
	situaFichas();
	dibujarFondo();
	dibujarFichaRoja();
	alerta(" ");
}



function iniciaPartida(){
	o = 1;
	situaFichas();
	dibujarFondo();
	dibujarFichaRoja();
	inicioJuego();
}
//turno de juego

function asignarTurno(){
		iniciaPartida();
		turnoRoja = true;
		alerta("la ficha roja");
		cambiarCubilete();

	
}
function cambiarTurno(){
		

		turnoAmarilla = false;
		turnoRoja = true;
		 cambiarCubilete();
}
//Tirada de jugador
function tirada(){
	
	if(turnoRoja === true & turnosPerdidosRoja>0){
		alerta("Turnos Perdidos Ficha Roja"+turnosPerdidosRoja);
		cambiarTurno();
		lanzarDado();
	}
	
	else if(turnosPerdidos ===0){
		// console.log("Turnos Perdidos"+turnosPerdidos);
		// console.log("Turnos Perdidos Ficha Roja"+turnosPerdidosRoja);
		// console.log("Turnos Perdidos Ficha Amarilla"+turnosPerdidosAmarilla);
		lanzarDado();
		
	}
	// console.log(dado.classList);
}
function lanzarDado(){
	
	tiro= parseInt(tiros);
	tiro--;
	document.getElementById("tiros").value=tiro;

	if (tiros==0) {
		alert("Solo contabas con 10 tiros y te los has acabado")
	}else{

	movimiento = turno = Math.round(Math.random()*(1,6));
	// movimiento = 62;
	cambiarDado();
	alerta("...avanza "+ (movimiento) + " casillas");//Mostrar el movimiento que va ha realizar la ficha.
	window.setTimeout("moverFichas()",1500);//Retrasa el movimiento para que de tiempo de leer el mensaje.
	tiros -=1;
}
}	
//Las fichas se mueven con la tirada del dado.
function moverFichas(){
		dado = document.getElementById("dadoEnJuego");
		cambiarCubilete();
		
		if (movimiento > (casillasRoja.length-o-1) ) {
			
			if ((casillasRoja.length-o-1)-movimiento==1) {
			}else if((casillasRoja.length-o-1)-movimiento<0){
				o=movimiento-(casillasRoja.length-o-1);

			}else{
			o=1;
			 r+=(casillasRoja.length-o-1)-movimiento-1;	
			}
			
		}else if(movimiento == (casillasRoja.length-o-1)){
			o=7;

		}else if((casillasRoja.length-o-1)-movimiento==0){
			o=1;

		}else{
			o += movimiento;
		}
		moverFichaRoja();
		//alert("Comprobando si es una casilla especial")
		comprobarCasilla(o);
		cambiarTurno();
	
}
//Las fichas se mueven por haber caido en casillas especiales.
function moverFichasEspecial(){
	
		o += movimiento;
		window.setTimeout("moverFichaRoja()",1500);
		//moverFichaRoja();
		cambiarTurno();
	
	
}
/*************************************************************************************/
//movimiento especiales
function comprobarCasilla(casilla){
	if(casilla == 1){
		casilla_1();
	}
	else if(casilla == 2){
		casilla_2();
	}
	else if(casilla ==3){
		casilla_3();
	}
	else if(casilla == 4){
		casilla_4();
	}
	else if(casilla == 5){
		casilla_5();
	}
	else if(casilla == 6){
		casilla_6();
	}
	else if(casilla == 7){
		casilla_7();
	}
	
	
}
/************ Funciones para casillas con Oca *****************************************/



function alerta(mensaje){
	var alerta;
	alerta = document.getElementById("alerta");
	alerta.innerHTML = mensaje;

}
function casilla_1(){
	

	var preguntas = document.getElementById("preguntas");
	preguntas.classList.remove("visible"); 
	preguntas.classList.add("oculto");

	var clicks = document.getElementById('clicks');
	clicks.classList.remove("visible"); 
	clicks.classList.add("oculto");

	var piedra= document.getElementById('piedra');
	piedra.classList.remove("visible"); 
	piedra.classList.add("oculto");

	var ahorcado= document.getElementById('ahorcado');
	ahorcado.classList.remove("visible"); 
	ahorcado.classList.add("oculto");

	var pinball = document.getElementById('pinball');
	pinball.classList.remove("visible"); 
	pinball.classList.add("oculto");

	var	seguir = document.getElementById("seguir");
	seguir.classList.remove("visible"); 
	seguir.classList.add("oculto");

	movimiento = 0;
	moverFichasEspecial();
}
function casilla_2(){
	
	var ahorcado= document.getElementById('ahorcado');
	ahorcado.classList.remove("oculto"); 
	ahorcado.classList.add("visible");

	var piedra= document.getElementById('piedra');
	piedra.classList.remove("visible"); 
	piedra.classList.add("oculto");

	var pinball= document.getElementById('pinball');
	pinball.classList.remove("visible"); 
	pinball.classList.add("oculto");

	var clicks = document.getElementById('clicks');
	clicks.classList.remove("visible"); 
	clicks.classList.add("oculto");

	var	seguir = document.getElementById("seguir");
	seguir.classList.remove("visible"); 
	seguir.classList.add("oculto");

	var preguntas = document.getElementById("preguntas");
	preguntas.classList.remove("visible"); 
	preguntas.classList.add("oculto");

	

	movimiento = 0;
	moverFichasEspecial();
}
function casilla_3(){
	
	var piedra= document.getElementById('piedra');
	piedra.classList.remove("oculto"); 
	piedra.classList.add("visible");

	var ahorcado= document.getElementById('ahorcado');
	ahorcado.classList.remove("visible"); 
	ahorcado.classList.add("oculto");

	var pinball= document.getElementById('pinball');
	pinball.classList.remove("visible"); 
	pinball.classList.add("oculto");
	
	var clicks = document.getElementById('clicks');
	clicks.classList.remove("visible"); 
	clicks.classList.add("oculto");

	var	seguir = document.getElementById("seguir");
	seguir.classList.remove("visible"); 
	seguir.classList.add("oculto");

	var preguntas = document.getElementById("preguntas");
	preguntas.classList.remove("visible"); 
	preguntas.classList.add("oculto");
	
	
	
	movimiento=0;
	moverFichasEspecial();

}
function casilla_4(){
	

	var	seguir = document.getElementById("seguir");
	seguir.classList.remove("oculto"); 
	seguir.classList.add("visible");

	var pinball = document.getElementById('pinball');
	pinball.classList.remove("visible"); 
	pinball.classList.add("oculto");
	
	var clicks = document.getElementById('clicks');
	clicks.classList.remove("visible"); 
	clicks.classList.add("oculto");
	
	var piedra= document.getElementById('piedra');
	piedra.classList.remove("visible"); 
	piedra.classList.add("oculto");

	var ahorcado= document.getElementById('ahorcado');
	ahorcado.classList.remove("visible"); 
	ahorcado.classList.add("oculto");

	var preguntas = document.getElementById("preguntas");
	preguntas.classList.remove("visible"); 
	preguntas.classList.add("oculto");

	movimiento = 0;
	moverFichasEspecial();
}
function casilla_5(){
	
	var pinball = document.getElementById('pinball');
	pinball.classList.remove("oculto"); 
	pinball.classList.add("visible");
	
	var clicks = document.getElementById('clicks');
	clicks.classList.remove("visible"); 
	clicks.classList.add("oculto");
	
	var piedra= document.getElementById('piedra');
	piedra.classList.remove("visible"); 
	piedra.classList.add("oculto");

	var ahorcado= document.getElementById('ahorcado');
	ahorcado.classList.remove("visible"); 
	ahorcado.classList.add("oculto");

	var	seguir = document.getElementById("seguir");
	seguir.classList.remove("visible"); 
	seguir.classList.add("oculto");

	var preguntas = document.getElementById("preguntas");
	preguntas.classList.remove("visible"); 
	preguntas.classList.add("oculto");

	movimiento = 0;
	moverFichasEspecial();
}
function casilla_6(){
	
	var clicks = document.getElementById('clicks');
	clicks.classList.remove("oculto"); 
	clicks.classList.add("visible");

	var piedra= document.getElementById('piedra');
	piedra.classList.remove("visible"); 
	piedra.classList.add("oculto");

	var ahorcado= document.getElementById('ahorcado');
	ahorcado.classList.remove("visible"); 
	ahorcado.classList.add("oculto");

	var pinball = document.getElementById('pinball');
	pinball.classList.remove("visible"); 
	pinball.classList.add("oculto");

	var	seguir = document.getElementById("seguir");
	seguir.classList.remove("visible"); 
	seguir.classList.add("oculto");

	var preguntas = document.getElementById("preguntas");
	preguntas.classList.remove("visible"); 
	preguntas.classList.add("oculto");
	

	movimiento = 0;
	moverFichasEspecial();
}
function casilla_7(){
	

	var preguntas = document.getElementById("preguntas");
	preguntas.classList.remove("oculto"); 
	preguntas.classList.add("visible");

	var clicks = document.getElementById('clicks');
	clicks.classList.remove("visible"); 
	clicks.classList.add("oculto");

	var piedra= document.getElementById('piedra');
	piedra.classList.remove("visible"); 
	piedra.classList.add("oculto");

	var ahorcado= document.getElementById('ahorcado');
	ahorcado.classList.remove("visible"); 
	ahorcado.classList.add("oculto");

	var pinball = document.getElementById('pinball');
	pinball.classList.remove("visible"); 
	pinball.classList.add("oculto");

	var	seguir = document.getElementById("seguir");
	seguir.classList.remove("visible"); 
	seguir.classList.add("oculto");


	movimiento = 0;
	moverFichasEspecial();
}
//Modificar el cursor al pasar sobre elementos clickeables

/***************************COMPORTAMIENTO DE LOS PANELES ***********************/
var panelInicio;
var panelSorteo;
var panelJuego;
var panelFinal;
function ocultarPanelInicio(){
	panelInicio = document.getElementById("panelInicio");
	panelInicio.classList.add("oculto");
	panelInicio.classList.remove("visible");
}

function mostrarPanelJuego(){
	panelJuego = document.getElementById("panelJuego");
	panelJuego.classList.remove("oculto");
	panelJuego.classList.add("visible");
}
function ocultarPanelJuego(){
	panelJuego = document.getElementById("panelJuego");
	panelJuego.classList.remove("visible");
	panelJuego.classList.add("oculto");
}
function mostrarPanelFinal(){
	panelFinal = document.getElementById("panelFinal");
	panelFinal.classList.remove("oculto");
	panelFinal.classList.add("visible");
}
function ocultarPanelFinal(){
	panelFinal = document.getElementById("panelFinal");
	panelFinal.classList.remove("visible");
	panelFinal.classList.add("oculto");
}
function jugar(){
	ocultarPanelInicio();
	ocultarPanelFinal();
	ocultarPanelJuego();
	asignarTurno();
	iniciaPartida();
}
function inicioJuego(){
	
	mostrarPanelJuego();
}
function finPartida(){
	ocultarPanelJuego();
	mostrarPanelFinal();
}
/************************Ganador**************************************/



/*****************************Ficha en juego representada por el cubilete de su color.***********************/
	var dado ;
function cambiarCubilete(){
	dado = document.getElementById("dadoEnJuego");
	var dadoUrl;
	
		// dado.classList.add("cubileteRojo");
		// dado.classList.remove("cubileteAmarillo")
		dadoUrl = "url(imagenes/dado.png)";
		dado.style.backgroundImage=dadoUrl;
	
}
/***************Cambiar el dado en función del  movimiento**************/
function cambiarDado(){
	dado = document.getElementById("dadoEnJuego");
	if(turnoRoja === true){
		var dadoUrl = "url(imagenes/dado.png)";
		dado.style.backgroundImage=dadoUrl;
	}
	else if(turnoAmarilla === true){
		var dadoUrl = "url(imagenes/dado.png)";
		dado.style.backgroundImage=dadoUrl;
	}
}
/*********************Jugador elige color*************************/
function seleccionarFicha(color){
	var colorJugador;
	var juegasCon;
	juegasCon = document.getElementById("colorJugador");
	if(color == "rojo"){
		colorJugador = color;
		juegasCon.innerHTML = "Juegas con la ficha roja"
		// alert("Color "+color);
	}
	else if(color == "amarillo"){
		colorJugador = color;
		juegasCon.innerHTML = "Juegas con la ficha amarilla"
		// alert("Color "+color)
	}
}

