class Billete
{
  constructor(n, v, c) {
    this.imagen = new Image();
    this.nombre = n;
    this.valor = v;
    this.cantidad = c;

    this.imagen.src = imagenes[this.nombre]
  }
}

var imagenes = [];
imagenes["500"] = "quinientosx.png";
imagenes["100"] = "cienx.png";
imagenes["50"] = "cincuentax.png";
imagenes["20"] = "veintex.png";
imagenes["10"] = "diezx.png";
imagenes["5"] = "cincox.png";
imagenes["2"] = "dosx.png";
imagenes["1"] = "unox.png";

var caja = [];
var entregado = [];
caja.push(new Billete("500",500,10));
caja.push(new Billete("100",100,5));
caja.push(new Billete("50",50,10));
caja.push(new Billete("20",20,5));
caja.push(new Billete("10",10,10));
caja.push(new Billete("5",5,5));
caja.push(new Billete("2",2,5));
caja.push(new Billete("1",1,5));
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero() {
  resultado.innerHTML = "";
  entregado = [];
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja) {
    if(dinero > 0) {
      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad) {
        papeles = bi.cantidad
      } else {
          papeles = div;
      }
      if (papeles != 0) {
        var bill = bi.valor.toString();
        entregado.push(new Billete(bill,bi.valor,papeles));
        dinero -= (bi.valor * papeles);
        bi.cantidad -= papeles;
      }
    }
  }

  if(dinero > 0) {
    resultado.innerHTML = " No hay dinero suficiente ";
  } else {
      for(var e of entregado) {
        // resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br/>";
        console.log(entregado);
        var i = 0;
        while ( i < e.cantidad ) {
          console.log(e.imagen);
          document.body.appendChild(e.imagen);
          console.log(i);
          console.log(e.cantidad);
          console.log(" ");
          i++;
        }
      }
  }
}   // Fin de función entregarDinero
