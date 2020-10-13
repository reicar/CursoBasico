var inf = parseInt(document.getElementById("min"));
var sup = parseInt(document.getElementById("max"));
console.log(inf);
console.log(sup);

var boton = document.getElementById("botoncito");
boton.addEventListener("click",numAleatorio);

function numAleatorio() {
  var inf = parseInt(document.getElementById("min"));
  var sup = parseInt(document.getElementById("max"));
  console.log(inf);
  console.log(sup);
  var aleatorio = Math.random();
  var z = Math.floor( aleatorio * (sup - inf + 1)) +  sup;
  console.log(z);
  document.write(" <p> Numero aleatorio: " + aleatorio + "</p>");
  document.write(" <p> Numero resultante: " + z + "</p>");
}
