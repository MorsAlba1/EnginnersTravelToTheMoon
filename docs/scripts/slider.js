var imagenes = [
  "fotos/Logo1.jpg",
  "fotos/Logo2.jpeg",
  "fotos/Luna1.jpeg",
  "fotos/Hotel1.jpeg"
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
    window.location.href = "#texto1";
  } else if (indice === 1) {
    window.location.href = "#texto1";
  } else if (indice === 2) {
    window.location.href = "#texto1";
  }
}

imagen.addEventListener("click", redirigir);

setInterval(cambiarImagen, 3000);

cambiarImagen();