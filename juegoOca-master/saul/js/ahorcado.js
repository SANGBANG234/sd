//Palabras a encontrar
var pbuscar =  [["arbol"], ["koala"], ["desierto"], ["hierba"], ["elefante"], ["botella"], ["sombrilla"], ["oscuridad"], ["verde"], 
				["jarron"], ["diestro"], ["hueso"], ["siniestro"], ["noche"], ["coche"], ["jirafa"], ["silla"], ["diamante"], ["karare"], 
				["conexion"], ["naranja"], ["musica"], ["valle"], ["jeringa"], ["derecha"], ["navegar"], ["fotografia"], ["union"], "rotacion", 
				["neurona"], ["funcion"], ["jamaica"], ["universidad"], ["sinfonia"], ["objeto"], ["arqueologia"], ["zorro"], ["parque"], ["ambiente"], 
				["ritual"], ["domingo"], ["guitarra"], ["ferrocarril"], ["hormiga"], ["carretera"], ["observatorio"], ["pintura"], ["sistema"], ["programacion"]];

var pelegida = ""; 
var rand;
var oculto = [];
var hueco = document.getElementById("pelegida");
var cont = 6;
var botones = document.getElementsByClassName('letra');
var btnInicio = document.getElementById("reset");

//Generamos la palabra que el jugador tendra que encontrar
function generarPalabra() {
	// body...
	rand = (Math.random() * 19).toFixed(0);
	pelegida = pbuscar[rand][0].toUpperCase();
	console.log(pelegida); //Respuesta de la palabra generada a buscar
}

//El numero de letras que tendra la palabra generada
function guiones(num) {
	// body...
	for (var i = 0; i < num; i++) {
		oculto[i] = "_";
	};
	hueco.innerHTML = oculto.join("");
}

//Abecedario
function generarAbecedario(a,z) {
	// body...
	document.getElementById("abecedario").innerHTML = "";
	var i = a.charCodeAt(0), j = z.charCodeAt(0);
	var letra = "";
	for ( ; i <= j; i++) {
		letra = String.fromCharCode(i).toUpperCase();
		document.getElementById("abecedario").innerHTML += "<button value = '" + letra + "' onclick = 'intento(\"" + letra + "\")' class = 'letra' id = '" + letra + "' >" + letra + "</button>";
		if (i==110) {
			document.getElementById("abecedario").innerHTML += "<button value = 'Ñ' onclick = 'intento(\"Ñ\")' class = 'letra' id = '" + letra + "'>Ñ</button>";
		}
	};
}

//Revisar el  intento
function intento(letra) {
	// body...
	document.getElementById(letra).disabled = true;
	if (pelegida.indexOf(letra) != -1) {
		for (var i = 0; i < pelegida.length; i++) {
			if (pelegida[i] == letra) oculto[i] = letra;
		};
		hueco.innerHTML = oculto.join("");
		document.getElementById("acierto").innerHTML = "Acertaste UuU";
		document.getElementById("acierto").className += "Acierto verde";
	}
	else {
		cont--;
		document.getElementById("intentos").innerHTML = cont;
		document.getElementById("acierto").innerHTML = "Fallaste UnU";
		document.getElementById("acierto").className += "Acierto Rojo";
		document.getElementById("image"+cont).className += "fade-in";		
	}

	terminado();
	setTimeout(function () {
		document.getElementById("acierto").className = "";
	}, 800);
}

//Comprobamos si ya ha completado la palabra
function terminado() {
	// body...
	if (oculto.indexOf("_") == -1) {
		document.getElementById("messagefinal").innerHTML = "Lo lograste ^^";
		document.getElementById("messagefinal").className += "zoom-in";
		for (var i = 0; i < botones.length; i++) {
			botones[i].disabled = true;
		};
		document.getElementById("reset").innerHTML = "Empezar";
		btnInicio.onclick = function () { location.reload()	};
	}
	else if (cont == 0) {
		document.getElementById("messagefinal").innerHTML = "Game Over";
		document.getElementById("messagefinal").className += "zoom-in";
		for (var i = 0; i < botones.length; i++) {
			botones[i].disabled = true;
		}
		document.getElementById("reset").innerHTML = "Empezar";
		btnInicio.onclick = function () { location.reload() };
	}
}

//Restablecer el juego
function inicio() {
	// body...
	generarPalabra();
	guiones(pelegida.length);
	generarAbecedario("a","z");
	cont = 6;
	document.getElementById("intentos").innerHTML = cont;
}

//Iniciar
window.onload = inicio();