function drawRectangle(x, y, _width, _height, _color) {
  var tela = document.querySelector('canvas');
  var pincel = tela.getContext('2d');
  // cor do retângulo
  pincel.fillStyle = _color;
  // pos x, y, width, height do retângulo
  pincel.fillRect(x, y, _width, _height);

  //cor da borda do retângulo
  pincel.strokeStyle = 'black';
  pincel.strokeRect(x, y, _width, _height);
}

function drawText(x, y, text) {
  // seleciona a tag canvas
  var tela = document.querySelector('canvas');
  // coloca a tela em 2D 
  var pincel = tela.getContext('2d');

  pincel.font = '18px sans-serif';
  // cor da fonte]
  pincel.fillStyle = 'red';
  pincel.fillText(text, x, y);
}

function drawBar(x, y, data, _colors, text) {

  drawText(x + 5, y - 10, text);

  var sumHeight = 0;
  for (var i = 0; i < data.length; i++) {
    var _height = data[i];
    drawRectangle(x, y + sumHeight, 50, _height, _colors[i]);
    sumHeight = sumHeight + _height;
  }

}

var data2015 = [50, 25, 20, 5];
var data2016 = [65, 20, 13, 2];

var _colors = ['blue', 'green', 'yellow', 'red'];

// x, y, data201_, _colors, text 
drawBar(50, 50, data2015, _colors, '2015');
drawBar(150, 50, data2016, _colors, '2016');
