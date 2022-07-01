var $canvas = document.querySelector('canvas');
var pincel = $canvas.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;
var valorX = 0;
var valorY = 0;

function cleanCanvas() {
  pincel.clearRect(0, 0, 600, 400);
  pincel.fillStyle = 'lightgray';
  pincel.fillRect(0, 0, 600, 400);
}

function desenhaCirculo(x, y, raio, cor) {

  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
  valorX = x;
  valorY = y;
}

function createTarget() {
  cleanCanvas();
  var x = Math.round(Math.random() * 600);
  var y = Math.round(Math.random() * 400);

  desenhaCirculo(x, y, raio + 20, 'red'); // maior círculo
  desenhaCirculo(x, y, raio + 10, 'white');
  desenhaCirculo(x, y, raio, 'red'); // menor circulo
}

function dispara($event) {
  var x = $event.pageX - $canvas.offsetLeft;
  var y = $event.pageY - $canvas.offsetTop;

  if (
    x >= valorX - raio
    && valorX <= x + raio
    && y >= valorY - raio
    && y <= valorY + raio) {

    alert("Acertou");
  }
}

$canvas.onclick = dispara;

setInterval(createTarget, 1000);
