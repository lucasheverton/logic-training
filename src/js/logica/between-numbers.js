function imprime(texto) {
  document.write(texto);
  document.write("<br>");
}

var inicio = 30;
var fim = 40;

while (inicio <= fim) {
  if (inicio == 33 || inicio == 37) {
  } else {
    imprime(inicio);
  }

  inicio += 1;
}

imprime("FIM");
