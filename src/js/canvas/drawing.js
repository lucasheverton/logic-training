var $canvas = document.querySelector('canvas');
var getColor = document.getElementById('change-color');
var pincel = $canvas.getContext('2d');
var draw = false;
var selectColor = 'blue';

pincel.fillStyle = '#000';
pincel.fillRect(0, 0, 900, 600);

getColor.addEventListener('input', () => {
  selectColor = getColor.value;
})

$canvas.onmousemove = function (evento) {
  if (draw) {
    let x = evento.pageX - $canvas.offsetLeft;
    let y = evento.pageY - $canvas.offsetTop;
    pincel.fillStyle = selectColor;
    pincel.beginPath();
    pincel.arc(x, y, 30, 0, 2 * Math.PI);
    pincel.fill();
  }
};

// atribuindo ao clicar no mouse uma função anonima (sem nome).
$canvas.onmousedown = function () {
  draw = true;
};

// atribuindo ao soltar o clique do mouse uma função anonima (sem nome).
$canvas.onmouseup = function () {
  draw = false;
}
