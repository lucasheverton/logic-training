function imprime(texto) {
  document.write(texto)
}

var numeroAleatorio = Math.round(Math.random() * 10);
var numeroEscolhido = parseInt(prompt("Digite um número de 0 a 10: "));

if(!numeroEscolhido || numeroEscolhido > 10) {
  document.location.reload();
}

// comparação estrita === (compara o tipo de dado)
if (numeroEscolhido === numeroAleatorio) {
  imprime("Parabéns você acertou!");
  imprime("<br>");
  imprime("Eu também pensei no número: " + numeroAleatorio);
} else {
  imprime("Que pena, você errou, tente novamente ;D");
  imprime("<br>");
  imprime("Eu pensei no número: " + numeroAleatorio)
}
