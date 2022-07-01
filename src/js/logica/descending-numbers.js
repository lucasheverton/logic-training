function imprime(txt) {
  document.write(txt);
  document.write("<br>");
}

var inicio = 20;
var fim = 0;

while (inicio >= fim) {
  imprime(inicio);
  inicio -= 1;
}

imprime("FIM!");
