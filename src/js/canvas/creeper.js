var tela = document.querySelector("canvas");
// criando um pincel e colocando a tela no formato 2D
var pincel = tela.getContext("2d");

// aplicando a cor da minha tela.
pincel.fillStyle = "#ffffff";

// criando a área do canvas
// 1 parâmetro: eixo x
// 2 parâmetro: eixo y
// 3 parâmetro: width
// 4 parâmetro: height
// meu retângulo começa na posição 0 do eixo x e y e tem 600 de largura e 400 de altura
pincel.fillRect(0, 0, 600, 400);


pincel.fillStyle = "darkgreen";
pincel.fillRect(125, 50, 350, 300);

pincel.fillStyle = "#000000";
// Olho esquerdo
pincel.fillRect(175, 110, 90, 90);

// Olho direito
pincel.fillRect(335, 110, 90, 90);

// Posicionar no meio
// Eixo x = Tamanho total do width - a largura do react divido por dois.
//  600 - 70 = 530 / 2 = 265

// Naris
pincel.fillRect(265, 200, 70, 100);

// Boca Lado esquerdo
pincel.fillRect(225, 240, 40, 110);

// Boca lado direito
pincel.fillRect(335, 240, 40, 110);
