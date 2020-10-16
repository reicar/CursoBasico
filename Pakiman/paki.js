// Crea el arreglo imágenes en donde se guardan los nombres de archivos
// de loa Pakimanes, donde el nombre de cada Pakiman sirve de indice para cada
// elemento del arreglo.
//
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

// Se crea el arreglo coleccion en el que se van a crear las instancias de la
// clase Pakiman utilizando el método push.
var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

// Esta estructura for visualizará las instancias de la clase Pakiman que se
// guardaron en el arreglo coleccion
for(var pakin of coleccion) {
  pakin.mostrar();
}
