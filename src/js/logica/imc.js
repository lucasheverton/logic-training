function resultadoImc(imc) {
  if (imc < 18.5) {
    estadoIMC("MAGREZA");
  } else if (imc >= 18.5 && imc <= 24.9) {
    estadoIMC("NORMAL");
  } else if (imc >= 25 && imc <= 39.9) {
    estadoIMC("SOBREPESO");
  } else if (imc >= 30 && imc <= 39.9) {
    estadoIMC("OBESIDADE")
  } else {
    estadoIMC("OBESIDADE GRAVE!")
  }
}

function estadoIMC(estado) {
  document.write("<br>")
  document.write(estado);
}

function mostraTela(imc) {
  document.write(imc);
  document.write("<br>");
}

function imprime(resultImc, nome) {
  mostraTela(nome + ", o resultado do seu imc é de: " + resultImc);
  resultadoImc(resultImc);
}

var nome = prompt("Digite seu nome: ");
var peso = parseInt(prompt(nome + ", Digite seu peso: "));
var altura = parseFloat(prompt(nome + ", Digite sua altura: "));
var imc = Math.round(peso / (altura * altura));

imprime(imc, nome);
