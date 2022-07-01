
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var x = 20;
var y = 20;

var up = 38 || 87;
var down = 40 || 83;
var left = 37 || 65;
var right = 39 || 68;

var incrementRate = 10;

function desenhaCirculo(x, y, raio) {
  pincel.fillStyle = 'blue';
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpaTela() {
  pincel.clearRect(0, 0, 600, 400);
  pincel.fillStyle = 'lightgray';
  pincel.fillRect(0, 0, 600, 400);
}

function atualizaTela() {
  limpaTela();
  desenhaCirculo(x, y, 10);
}

setInterval(atualizaTela, 20);

function readKeyboar($event) {
  $event.keyCode

  if ($event.keyCode == up) {
    y = y - incrementRate;
  } else if ($event.keyCode == down) {
    y = y + incrementRate;
  } else if ($event.keyCode == left) {
    x = x - incrementRate;
  } else if ($event.keyCode == right) {
    x = x + incrementRate;
  }
}

document.onkeydown = readKeyboar;
