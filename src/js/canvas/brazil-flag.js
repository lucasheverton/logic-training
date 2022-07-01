var tela = document.querySelector("canvas");
// criando um pincel e colocando a tela no formato 2D
var pincel = tela.getContext("2d");

// aplicando a cor da minha tela.
pincel.fillStyle = "green";

function rectangleGreen() {
  pincel.fillRect(0, 0, 700, 600);
}

function triangleYellowUp() {
  pincel.fillStyle = "yellow";
  pincel.beginPath();
  pincel.moveTo(350, 100);
  pincel.lineTo(50, 300);
  pincel.lineTo(650, 300);
  pincel.fill();
}

function triangleYellowDown() {
  pincel.fillStyle = "yellow";
  pincel.beginPath();
  pincel.moveTo(350, 500);
  pincel.lineTo(50, 300);
  pincel.lineTo(650, 300);
  pincel.fill();
}

function triangleYellow() {
  triangleYellowUp();
  triangleYellowDown();
}

function circleBlue() {
  pincel.fillStyle = "darkblue";
  pincel.beginPath();
  pincel.arc(350, 300, 115, 0, 3 * 14);
  pincel.fill();
}

rectangleGreen();
triangleYellow();
circleBlue();
