var $canvas = document.querySelector('canvas');
var pincel = $canvas.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var valorX = 0;
var sentido = 1;

function drawCircle(x, y, raio) {
  pincel.fillStyle = "blue";
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function cleanCanvas() {
  pincel.clearRect(0, 0, 600, 400);
  pincel.fillStyle = 'lightgray';
  pincel.fillRect(0, 0, 600, 400);
}

function animation() {
  cleanCanvas();
  drawCircle(valorX, 50, 15);

  // Sinais iguais valor positivo, sinais diferentes valor negativo.
  // 601 + (-1) = 600 ...
  // + + = +
  // - - = +
  // + - = -
  // - + = -

  if (valorX > 600) {
    sentido = -1;
  } else if (valorX < 0) {
    sentido = 1;
  }

  valorX = valorX + sentido;
}

setInterval(animation, 1);
