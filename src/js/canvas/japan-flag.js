var tela = document.querySelector("canvas");
// criando um pincel e colocando a tela no formato 2D
var pincel = tela.getContext("2d");

// aplicando a cor da minha tela.
pincel.fillStyle = "white"

// criando a área do canvas
// 1 parâmetro: eixo x
// 2 parâmetro: eixo y
// 3 parâmetro: width
// 4 parâmetro: height
// meu retângulo começa na posição 0 do eixo x e y e tem 900 de largura e 600 de altura
pincel.fillRect(0, 0, 900, 600);

// background color do circulo
pincel.fillStyle = "red";

//começe um caminho
pincel.beginPath();


// desenhando o ciruclo.
// 1 parâmetro: eixo x
// 2 parâmetro: eixo y
// 3 parâmetro: tamanho(raio)
// 4 
// 5 parâmetro calculando a circuferência (2 vezes o PI)
pincel.arc(450, 300, 150, 0, 2 * 3.14);

// preenchendo o circulo
pincel.fill();
