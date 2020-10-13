var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d")

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var fondo = {
  url: "tile.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

var x=250;
var y=250;
document.addEventListener("keydown", dibujarTeclado);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos() {
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos() {
  pollo.cargaOK = true;
  dibujar();
}

function dibujar() {
  if(fondo.cargaOK & vaca.cargaOK & cerdo.cargaOK & pollo.cargaOK) {
      papel.drawImage(fondo.imagen,0,0);
      for (var v=0; v < aleatorio(1,10); v++) {
        papel.drawImage(vaca.imagen,aleatorio(0,450),aleatorio(0,450));
      }
      for (var v=0; v < aleatorio(1,10); v++) {
        papel.drawImage(cerdo.imagen,aleatorio(0,450),aleatorio(0,450));
      }
      for (var v=0; v < aleatorio(1,10); v++) {
        papel.drawImage(pollo.imagen,aleatorio(0,450),aleatorio(0,450));
      }
      papel.drawImage(cerdo.imagen,x,y);
  }
}

function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min
  return resultado
}

function dibujarTeclado(evento) {
  var movimiento = 5;
  switch (evento.keyCode) {
      case teclas.UP:
        y = y - movimiento;
        dibujar();
      break;
      case teclas.DOWN:
        y = y + movimiento;
        dibujar();
      break;
      case teclas.LEFT:
        x = x - movimiento;
        dibujar();
      break;
      case teclas.RIGHT :
        x = x + movimiento;
        dibujar();
      break;
    default:
      console.log("Otra tecla");
    break;
  }
}
