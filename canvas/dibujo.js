var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito")
boton.addEventListener("click",dibujoPorClick);
console.log(texto.value);

var d = document.getElementById('dibujito');
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {
  var lineas = parseInt(texto.value);

  var Incx = 150/lineas;
  var Incy = 300/lineas;

  var mvx1 = 150 + Incx;
  var mvx2 = 150 - Incx;
  var mvy2 = 300

  for (var mvy = 0; mvy <= 300; mvy+=Incy) {
      dibujarLinea("red",150,mvy,mvx1,300);
      dibujarLinea("blue",150,mvy,mvx2,300);
      dibujarLinea("red",150,mvy2,mvx2,0);
      dibujarLinea("blue",150,mvy2,mvx1,0);
      mvx1+=Incx; mvx2-= Incx; mvy2-=Incy;
  }

/*  for (var mvy = 300; mvy <= 0; mvy-=Incy) {
      dibujarLinea("pink",150,mvy,mvx1,300);
      dibujarLinea("green",150,mvy,mvx2,300);
      mvx1+=Incx; mvx2+= -Incx;
      console.log (mvy);
  }
*/
  dibujarLinea("black",150,0,150,300);
}
