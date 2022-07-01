var tela = document.querySelector("canvas");
// criando um pincel em 2D
var pincel = tela.getContext("2d");

// aplicando a cor da minha tela.
pincel.fillStyle = "#ffffff";

function outsideTriangle(xa, ya, xc, yc, _color) {
  // Triângulo de fora (Black)

  // criando a área do canvas
  // 1 parâmetro: eixo x
  // 2 parâmetro: eixo y
  // 3 parâmetro: width
  // 4 parâmetro: height
  // meu retângulo começa na posição 0 do eixo x e y e tem 700 de largura e 500 de altura
  pincel.fillRect(0, 0, 700, 500);

  // aplicando uma cor pro triangulo de fora
  pincel.fillStyle = _color;

  // começando um caminho (ponto de inicio do pincel)
  pincel.beginPath();

  //aplicando o começo do caminho
  // 1 parâmetro -> coordenadas do eixo x
  // 2 parâmetro -> coordenadas do eixo y
  pincel.moveTo(xa, ya);

  // vai desenhando as linhas de acordo com as coordenadas
  pincel.lineTo(xa, yc);
  pincel.lineTo(xc, yc);

  //prenchendo o triângulo
  pincel.fill();
}

function insideTriangle() {
  // Triângulo de dentro (White)

  // aplicando uma cor para o triângulo de dentro
  pincel.fillStyle = "#ffffff";

  // começando um caminho (ponto de inicio do pincel)
  pincel.beginPath();

  //aplicando o começo do caminho
  // 1 parâmetro -> coordenadas do eixo x
  // 2 parâmetro -> coordenadas do eixo y
  pincel.moveTo(100, 175);

  // vai desenhando as linhas de acordo com as coordenadas
  pincel.lineTo(100, 350);
  pincel.lineTo(275, 350);

  //prenchendo o triângulo
  pincel.fill();
}

outsideTriangle(50, 50, 400, 400, 'black');
insideTriangle();
