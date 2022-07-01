var $canvas = document.querySelector("canvas");
var pencil = $canvas.getContext("2d");

pencil.fillStyle = "#000";
pencil.fillRect(0, 0, 600, 400);

var _colors = ["blue", "red", "green"];
var pos = 1;
var colorSelect = "";
var minSize = 10;
var maxSize = 40;
var raio = minSize;

function drawCircle($event) {
  //subtraindo o espaço que fica fora do canvas no eixo x e y
  let x = $event.pageX - $canvas.offsetLeft;
  let y = $event.pageY - $canvas.offsetTop;
  let shiftKey = $event.shiftKey;
  let ctrlKey = $event.ctrlKey;

  shiftKey ? raio += 10 : raio;
  ctrlKey && raio >= 15 ? raio -= 5 : raio;

  if (raio <= maxSize) {
    // criando as bolinhas
    pencil.fillStyle = colorSelect || "blue";
    pencil.beginPath();
    pencil.arc(x, y, raio, 0, 2 * Math.PI);
    console.log(raio);
    pencil.fill();
  } else {
    raio = maxSize;
  }
}

function changeColor() {
  if (pos > _colors.length - 1) { pos = 0 }
  colorSelect = _colors[pos];
  pos += 1;

  return false;
}

$canvas.onclick = drawCircle;
$canvas.oncontextmenu = changeColor;
