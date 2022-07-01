function imprime(texto) {
  document.write(texto);
  document.write("<br>");
}

var inicio = 0;
var fim = 100;

while (inicio <= fim) {
  if (inicio % 2 == 0) {
    imprime(inicio);
  }

  inicio += 2;
};

imprime("FIM");
