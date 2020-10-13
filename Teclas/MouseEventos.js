var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

raton = document.addEventListener("mousedown", alerta);
//raton = document.addEventListener();
console.log(raton);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red",99,99,101,101, papel);

function alerta() {
  console.log(cuadrito);
  console.log(papel);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  var colorcito = "brown";
  var movimiento = 5;
  switch (evento.keyCode) {
      case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
      break;
      case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
      break;
      case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
      break;
      case teclas.RIGHT :
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
      break;
    default:
      console.log("Otra tecla");
    break;
}
  /* if(evento.keyCode == teclas.UP) {
    console.log("vamo' pa arriba");
  } else if(evento.keyCode == teclas.DOWN) {
    console.log("vamo' pa abajo");
  } else if(evento.keyCode == teclas.LEFT) {
    console.log("vamo' pa la izquierda");
  } else if(evento.keyCode == teclas.RIGHT) {
    console.log("vamo' pa la derecha");
  } */

}
