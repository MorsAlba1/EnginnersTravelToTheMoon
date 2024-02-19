function habilitarBoton() {
  var metodoPago = document.getElementById("metodoPago").value;
  var enviarBtn = document.getElementById("enviarBtn");
  var infoTarjeta = document.getElementById("infoTarjeta");

  if (metodoPago === "tarjeta") {
    infoTarjeta.style.display = "block";
    validarCamposTarjeta();
  } else {
    enviarBtn.disabled = false;
    infoTarjeta.style.display = "none";
  }
}

function validarNumeroTarjeta(numeroTarjeta) {
  return /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/.test(numeroTarjeta);
}

function validarCamposTarjeta() {
  var enviarBtn = document.getElementById("enviarBtn");
  var numeroTarjeta = document.getElementById("numeroTarjeta").value;
  var nombrePropietario = document.getElementById("nombrePropietario").value;
  var correoElectronico = document.getElementById("correoElectronico").value;
  var mesExpiracion = document.getElementById("mesExpiracion").value;
  var cvv = document.getElementById("cvv").value;

  var numeroTarjetaValido = validarNumeroTarjeta(numeroTarjeta);
  var nombrePropietarioValido = nombrePropietario.trim() !== "";
  var correoElectronicoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoElectronico);
  var mesExpiracionValido = /^[0-9]{2}-[0-9]{2}$/.test(mesExpiracion);
  var cvvValido = /^[0-9]{3}$/.test(cvv);

  if (numeroTarjetaValido && nombrePropietarioValido && correoElectronicoValido && mesExpiracionValido && cvvValido) {
    enviarBtn.disabled = false;
  } else {
    enviarBtn.disabled = true;
  }
}

function mostrarAlerta() {
  var metodoPago = document.getElementById("metodoPago").value;

  if (metodoPago === "tarjeta") {
    validarCamposTarjeta();
    var enviarBtn = document.getElementById("enviarBtn");
    if (!enviarBtn.disabled) {
      alert("Pago exitoso");
    } else {
      alert("Completa los campos de la tarjeta antes de continuar");
    }
  } else {
    alert("Pago exitoso");
  }
}
