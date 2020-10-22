class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

var caja = [];
var entregado = [];
caja.push(new Billete(500,10));
caja.push(new Billete(100,5));
caja.push(new Billete(50,10));
caja.push(new Billete(20,5));
caja.push(new Billete(10,10));
caja.push(new Billete(5,5));
caja.push(new Billete(2,5));
caja.push(new Billete(1,5));
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {

      if(dinero > 0)
      {
        div = Math.floor(dinero / bi.valor);

        if(div > bi.cantidad)
        {
          papeles = bi.cantidad
        }
        else
        {
          papeles = div;
        }

        entregado.push(new Billete(bi.valor,papeles));
        dinero -= (bi.valor * papeles);

      }

    }

    if(dinero > 0)
    {

        resultado.innerHTML = " No hay dinero suficiente ";
    }
    else
    {
        for(var e of entregado)
        {
          resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br/>";
        }
    }


}
