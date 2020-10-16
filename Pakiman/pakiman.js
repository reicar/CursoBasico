// En este archivo se dejó la clase Pakiman, que es llamada desde el archivo
// paki.js cuando es necesario.
// Esta clase posee cuatro atributos la imagen, el nombre, la vida y el Ataque
//
// Además posee dos métodos:
//    Método hablar(): Muestra un alert con el nombre del Pakiman
//    Método mostrar(): Muestra en el documento los atributos de cada Pakiman
//
class Pakiman {
    constructor(n, v, a) {
      this.imagen = new Image();
      this.nombre = n;
      this.vida = v;
      this.ataque = a;

      this.imagen.src = imagenes[this.nombre]
    }
    hablar() {
      alert(this.nombre);
    }
    mostrar() {
      document.body.appendChild(this.imagen);
      document.write("<br/><strong>" + this.nombre + "</strong><br/>");
      document.write("Vida: " + this.vida + "<br/>");
      document.write("Ataque: " + this.ataque + "<hr/>");
    }
}
