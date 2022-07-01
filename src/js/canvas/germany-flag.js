var tela = document.querySelector("canvas");
// criando um pincel e colocando a tela no formato 2D
var pincel = tela.getContext("2d");

// aplicando a cor da minha tela.
pincel.fillStyle = "grey"

// criando a área do canvas
// 1 parâmetro: eixo x
// 2 parâmetro: eixo y
// 3 parâmetro: width
// 4 parâmetro: height
// meu retângulo começa na posição 0 do eixo x e y e tem 900 de largura e 600 de altura
pincel.fillRect(0, 0, 900, 600);

pincel.fillStyle = "black";
pincel.fillRect(0, 0, 900, 200);

pincel.fillStyle = "red";
pincel.fillRect(0, 200, 900, 200);

pincel.fillStyle = "yellow";
pincel.fillRect(0, 400, 900, 400);
