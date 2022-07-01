function fraction(x, y, size, backgroundColor = "#ffffff") {
  // criando a tela do canvas
  var tela = document.querySelector("canvas");
  // criando o pincel na tela 2D
  var pincel = tela.getContext("2d");

  // o background do meu quadrado
  pincel.fillStyle = backgroundColor;

  // criando um quadrado
  pincel.fillRect(x, y, size, size);

  // cor da borda
  pincel.fillSroke = "#000000";

  // desenhando a borda do quadrado
  pincel.strokeRect(x, y, size, size)
}

for (let y = 50; y <= 150; y += 50) {
  fraction(y, 50, 50, "darkgreen");
}

fraction(200, 50, 50);
