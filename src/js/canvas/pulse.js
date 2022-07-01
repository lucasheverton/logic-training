var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var tamanhoRaio = 20;
var valor = 1;

function desenhaCirculo(x, y, raio, cor) {

  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpaTela() {
  pincel.clearRect(0, 0, 600, 400);
  pincel.fillStyle = 'lightgray';
  pincel.fillRect(0, 0, 600, 400);
}

function pulse() {
  limpaTela();
  desenhaCirculo(30, 50, tamanhoRaio, 'blue')

  if (tamanhoRaio > 30) {
    valor = -1;
  } else if (tamanhoRaio < 20) {
    valor = 1;
  }

  tamanhoRaio = tamanhoRaio + valor;
}


setInterval(pulse, 20);
