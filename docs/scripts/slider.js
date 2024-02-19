var imagenes = [
  "fotos/Logo1.jpg",
  "fotos/Logo2.jpg",
  "fotos/Luna1.jpg",
  "fotos/Hotel1.jpg"
];
var indice = 0;
var imagen = document.getElementById("imagen");

function cambiarImagen() {
  imagen.src = imagenes[indice];
  indice = (indice + 1) % imagenes.length;
}

function redirigir() {
  // Redirige a diferentes partes del texto según la imagen actual
  if (indice === 0) {
    window.location.href = "#texto";
  } else if (indice === 1) {
    window.location.href = "#texto";
  } else if (indice === 2) {
    window.location.href = "#texto";
  }
}

imagen.addEventListener("click", redirigir);

setInterval(cambiarImagen, 3000);

cambiarImagen();
