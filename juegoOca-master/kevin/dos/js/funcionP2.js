function principal(){
    document.getElementById('botoncom').style.background='#ccc';
    document.getElementById('botoncom').style.color ='#ccc';
    document.getElementById('botoncom').style.border ='#ccc';
    numfin = Math.round(Math.random()*(80-60)+60);
    document.getElementById('boton1').disabled=true;
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    ctx.fillStyle="rgb(250, 219, 216)";
    ctx.font = "bold 22px Comic-Sams MS";
    ctx.fillText("Debes completar: "+numfin+" clicks en menos de",50,50);
    ctx.fillText("10 segundos, para ganar.",50,90);
    var imagen1;
    imagen1 = new Image();
    imagen1.src = 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/90600930_519182265409945_5129776417126481920_n.jpg?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=0CQPEjMdonsAX_EX1dY&_nc_ht=scontent.fmex10-2.fna&oh=340cf36dfb470b757f11ed1e804cde9b&oe=5E9D85D8';
    imagen1.onload = function (){
        ctx.drawImage(imagen1, 32.5, 100, 450, 200);
    }
    document.getElementById('botoncom').disabled=true;
}

function hidebotom(){
    document.getElementById('botoncom').style.background='#ccc';
    document.getElementById('botoncom').style.color ='#ccc';
    document.getElementById('botoncom').style.border ='#ccc';
}

function showbotom(){
    document.getElementById('botoncom').style.background='#CB3234';
    document.getElementById('botoncom').style.color ='#000000';
    document.getElementById('botoncom').style.border ='#000000';
}

var i = 0;           
function contadorclics() {
    i++;
    if (i == 1) {
        document.getElementById("clicks").innerHTML = i; 
    } else {
        document.getElementById("clicks").innerHTML = i;
    }

    //alert(parseInt(numfin+"hey"));
    function mover_ralph_sleep(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext("2d");
        var img1;
        img1 = new Image();
        img1.src = 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/90600930_519182265409945_5129776417126481920_n.jpg?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=0CQPEjMdonsAX_EX1dY&_nc_ht=scontent.fmex10-2.fna&oh=340cf36dfb470b757f11ed1e804cde9b&oe=5E9D85D8';  
        img1.onload = function(){
            ctx.drawImage(img1, 32.5, 100, 450, 200);
        }
    }
    function mover_ralph_cawake(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext("2d");
        var img2;
        img2 = new Image();
        img2.src = 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/89905743_527157574663956_5731082069178580992_n.jpg?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=3455w0uwGhsAX8OE11w&_nc_ht=scontent.fmex10-2.fna&oh=3b467e5748925053799dcf8c6ddabea6&oe=5E9CD10F';  
        img2.onload = function(){
            ctx.drawImage(img2, 32.5, 100, 450, 200);
        }
    }
    function mover_ralph_awake(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext("2d");
        var img3;
        img3 = new Image();
        img3.src = 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/90556495_301074267525467_6176475228655321088_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=MCyAygWRfwAAX_4rm_3&_nc_ht=scontent.fmex10-2.fna&oh=61cf258286e5072229a35e6978e2d6d1&oe=5E9EA1EC';
        img3.onload = function (){
            ctx.drawImage(img3, 32.5, 100, 450, 200);
        }
    }
    var divisionpar = i%2;
    var divisionimp = i%2;
    if (divisionpar==0) {
        mover_ralph_sleep();
    } else if (divisionimp!=0){
        mover_ralph_awake();
    }
}

function Reset() {
    i = 0;
    document.getElementById("clicks").innerHTML = i;
}

function comenzar() {
    document.getElementById('botonan').disabled=true;
    document.getElementById('botonan').style.background='#ccc';
    document.getElementById('botonan').style.color ='#ccc';
    document.getElementById('botonan').style.border ='#ccc';
    segundostotales=5;
    timer();
    function timer(){
        console.log(segundostotales--);
        var tiempo = setTimeout(timer,1000);
        document.getElementById("cuenta_regresiva").innerHTML="Comenzará en: "+segundostotales;
        if (segundostotales<0) {
            document.getElementById('boton1').style.background='#008F39';
            document.getElementById('boton1').style.color ='#000000';
            document.getElementById('boton1').style.border ='#000000';
            clearTimeout(tiempo);
            segundostotales1=10;
            timer1();
            function timer1(){
                console.log(segundostotales1--);
                var tiempo1 = setTimeout(timer1,1000);
                document.getElementById("cuenta_regresiva").innerHTML="Cliquea ahora, te quedan: "+segundostotales1+" segundos";               
                document.getElementById('boton1').disabled=false;
                if (segundostotales1==0) {
                    document.getElementById("cuenta_regresiva").innerHTML="Cliquea ahora, te quedan: "+0+" segundos";
                    document.getElementById('boton1').disabled=true;
                    document.getElementById('botoncom').disabled=false;
                    showbotom();
                    clearTimeout(tiempo1);
                    if (i==0 && segundostotales1==0) {
                        alert("has perdido")
                    }
                }
            }
        }
    }
}
var zz=0;
function comprobar(){
    if (i>=10) {
        alert("has ganado un punto")
        zz=1;
        if (zz=1) {
            document.getElementById('botoncom').disabled=false;
            hidebotom();
        }
    }
    else if (i<numfin){
        function mover_ralph_sleep(){
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext("2d");
            var img1;
            img1 = new Image();
            img1.src = 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/90600930_519182265409945_5129776417126481920_n.jpg?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=0CQPEjMdonsAX_EX1dY&_nc_ht=scontent.fmex10-2.fna&oh=340cf36dfb470b757f11ed1e804cde9b&oe=5E9D85D8';  
            img1.onload = function(){
                ctx.drawImage(img1, 32.5, 100, 450, 200);
            }
        }
        mover_ralph_sleep();
        alert("has perdido")
        zz=1;
        if (zz=1) {
            document.getElementById('botoncom').disabled=false;
            hidebotom();
        }
    }
    Reset();
    document.getElementById('botonan').style.background='#9C9C9C';
    document.getElementById('botonan').style.color ='#000000';
    document.getElementById('botonan').style.border ='#000000';
    document.getElementById('botonan').disabled=false;
    document.getElementById("cuenta_regresiva").innerHTML=10;
    principal();

}