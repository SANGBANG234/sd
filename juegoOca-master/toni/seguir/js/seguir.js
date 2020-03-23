const cvs = document.getElementById("seguir");
const ctx = cvs.getContext("2d");

var cvsLeft = cvs.offsetLeft,
    cvsTop = cvs.offsetTop,
    elements = [];

var img = new Image();
img.src = "img/van.png";

const img_2 = new Image();
img_2.src = "img/van_2.jpg";

ctx.drawImage(img_2,0,0);

const ball = {
	x:cvs.width/2,
	y:cvs.height/2,
	radius:30,
	speed:10,
	velocityX:13,
	velocityY:13,
	color : "WHITE"
}

function drawRect(x,y,w,h,color) {
	ctx.fillStyle = color;
	ctx.fillRect(x,y,w,h);
}

function drawRect(elements) {

	ctx.fillRect(ball.x, ball.y, 80, 80);
}

function drawText(text,x,y,color) {
	ctx.fillStyle = color;
	ctx.font= "45px fantasy";
	ctx.fillText(text,x,y);
}

function drawImage(img,x,y,w) {
	ctx.drawImage(img_2,x,y);
}

function drawImage(img,x,y,w) {
	ctx.drawImage(img,x,y);
}
var contador=0;
cvs.addEventListener('click', function(event) {
    var x_2 = event.pageX - cvsLeft,
        y_2 = event.pageY - cvsTop;

 
    elements.forEach(function(element) {
        if ( y_2 > ball.y && y_2 < ball.y + 80 
            && x_2 > ball.x && x_2 < ball.x + 80) {
            alert('Le has dadooo');
        contador++;
        }
    });

}, false);




elements.push({

	colour: 'rgba(138,221,45,0)',
    width: 80,
    height: 80,
    top: ball.y,
    left: ball.x

	
});
elements.forEach(function(element) {
	ctx.fillStyle = element.colour;
	ctx.fillRect( ball.x, ball.y, element.height, element.width);
});

function render() {

	drawRect(0,0, cvs.width, cvs.height, "WHITE");
	drawImage(img_2, 0, 0);
	drawRect(ball.x, ball.y, 80, 80);
	drawImage(img, ball.x, ball.y, ball.radius);

	

	

	
}

function update() {
	ball.x += ball.velocityX;
	ball.y += ball.velocityY;

	if (ball.y + ball.radius > cvs.height || ball.y - ball.radius < 0) {
		ball.velocityY = -ball.velocityY;
	}
	if (ball.x + ball.radius > cvs.width || ball.x - ball.radius < 0) {
		ball.velocityX = -ball.velocityX;
	}
}


function game() {
	update();
	render();
}

const framePerSecond = 50;
setInterval(game, 1000/framePerSecond);