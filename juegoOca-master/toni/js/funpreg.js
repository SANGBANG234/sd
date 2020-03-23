function principal(){
    preg1();
}

function preg1(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle="rgb(8, 249, 143)";
    ctx.font = "bold 22px Arial";
    ctx.fillText("1. ¿En dónde eran las reuniones del club",10,50);
    ctx.fillText("de malvados?",10,70);
    ctx.fillText("A)En el bar de Tapper",10,100);
    ctx.fillText("B)En Pacman",10,120);
    ctx.fillText("C)En sugar rush",10,140);

}

function preg2(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle="rgb(8, 249, 143)";
    ctx.font = "bold 22px Arial";
    ctx.fillText("2. ¿Cómo se llamaba el juego al que Ralph",10,50);
    ctx.fillText("entra para ganar una medalla?",10,70);
    ctx.fillText("A)Sonic",10,100);
    ctx.fillText("B)Call of duty",10,120);
    ctx.fillText("C)Hero's Duty",10,140);
}

function preg3(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle="rgb(8, 249, 143)";
    ctx.font = "bold 22px Arial";
    ctx.fillText("3. ¿Cuál es la verdadera identidad de",10,50);
    ctx.fillText("King Candy?",10,70);
    ctx.fillText("A)Turbo",10,100);
    ctx.fillText("B)Felix el reparador",10,120);
    ctx.fillText("C)Q'Bert",10,140);
}

function preg4(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle="rgb(8, 249, 143)";
    ctx.font = "bold 22px Arial";
    ctx.fillText("4. Completa el juramento de malvados: ",10,50);
    ctx.fillText("Soy malo y eso es bueno, yo jamás seré",10,70);
    ctx.fillText("seré bueno y eso no es malo, no hay_____________________",10,90);
    ctx.fillText("A)Cosa que un villano no lograría",10,120);
    ctx.fillText("B)Nadie que quiera ser además de mí",10,140);
    ctx.fillText("C)Nadie que iguale a un malvado",10,160);
}

function preg5(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle="rgb(8, 249, 143)";
    ctx.font = "bold 22px Arial";
    ctx.fillText("5. ¿De qué sabor era el charco de ",10,50);
    ctx.fillText("lodo de Ralph en el pastel de Mary?",10,70);
    ctx.fillText("A)Moras",10,100);
    ctx.fillText("B)Fresa",10,120);
    ctx.fillText("C)Chocolate",10,140);
}

var z=0;
function bt1(){
    z++;
    if (z>5) {
        z=0;
    }
    if (z==0) {
        preg1();
    }
    if (z==1) {
        preg2();
        alert("Respuesta incorrecta")
    }
    if (z==2){
        preg3();
        alert("Respuesta incorrecta")
    }
    if (z==3){
        preg4();
        alert("Respuesta correcta")
        //score++;
    }
    if (z==4){
        preg5();
        alert("Respuesta incorrecta")
    }
    if (z==5){
        alert("Respuesta incorrecta")
    }
}

function bt2(){
    z++;
    if (z>5) {
        z=0;
    }
    if (z==0) {
        preg1();
    }
    if (z==1) {
        preg2();
        alert("Respuesta correcta")
        //score++;
    }
    if (z==2){
        preg3();
        alert("Respuesta incorrecta")
    }
    if (z==3){
        preg4();
        lert("Respuesta incorrecta")
    }
    if (z==4){
        preg5();
        alert("Respuesta correcta")
        //score++;
    }
    if (z==5){
        alert("Respuesta incorrecta")
    }   
}

function bt3(){
    z++;
    if (z>5) {
        z=0;
    }
    if (z==0) {
        preg1();
    }
    if (z==1) {
        preg2();
        alert("Respuesta incorrecta")
    }
    if (z==2){
        preg3();
        alert("Respuesta correcta")
        //score++;
    }
    if (z==3){
        preg4();
        lert("Respuesta incorrecta")
    }
    if (z==4){
        preg5();
        alert("Respuesta incorrecta")
    }
    if (z==5){
        
        alert("Respuesta correcta")
        //score++;
    }  
}