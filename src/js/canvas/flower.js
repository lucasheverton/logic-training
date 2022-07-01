function drawCircle(x, y, raio, circleColor) {
  // criando a tela do canvas
  var tela = document.querySelector("canvas");
  // criando o pincel na tela 2D
  var pincel = tela.getContext("2d");

  // background color do circulo
  pincel.fillStyle = circleColor;

  // começando um caminho para o circulo
  pincel.beginPath();

  // criando um circulo
  pincel.arc(x, y, raio, 0, 2 * Math.PI);

  //preenchendo o circulo
  pincel.fill();
}

function drawFlower() {
  drawCircle(270, 200, 15, "orange");
  drawCircle(300, 200, 15, "red");
  drawCircle(330, 200, 15, "black");

  drawCircle(300, 170, 15, "yellow");
  drawCircle(300, 230, 15, "blue");
}

drawFlower();
