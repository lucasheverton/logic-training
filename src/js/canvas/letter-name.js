function drawPixel(x, y, backgroundColor, borderColor) {
  // criando a tela do canvas
  var tela = document.querySelector("canvas");
  // criando o pincel na tela 2D
  var pincel = tela.getContext("2d");

  // o background do meu quadrado
  pincel.fillStyle = backgroundColor;

  // criando um quadrado
  pincel.fillRect(x, y, 50, 50);

  // cor da borda
  pincel.fillSroke = borderColor;

  // desenhando a borda do quadrado
  pincel.strokeRect(x, y, 50, 50)
}

for (let y = 50; y <= 250; y += 50) {
  drawPixel(50, y, "blue", "black");
}

for (let x = 100; x <= 200; x += 50) {
  drawPixel(x, 250, "red", "black");
}
