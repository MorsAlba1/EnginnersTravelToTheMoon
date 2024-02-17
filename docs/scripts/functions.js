function redirigir(id) {
      ocultarMenu(); // Cierra el menú
      var targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function ocultarMenu() {
      var overlay = document.getElementById('overlay');
      var menuContent = document.getElementById('menu-content');

      overlay.style.display = 'none';
      menuContent.classList.remove('open');
      ocultarDesplegables();
    }

    function mostrarMenu() {
      var overlay = document.getElementById('overlay');
      var menuContent = document.getElementById('menu-content');

      overlay.style.display = 'flex';

      // Elimina y vuelve a agregar la clase 'open' en el menú
      menuContent.classList.remove('open');
      setTimeout(function () {
        menuContent.classList.add('open');
      }, 10);

      // Muestra el primer desplegable desde arriba
      mostrarDesplegable('primerDesplegable');
    }

    function mostrarDesplegable(opcion) {
      ocultarDesplegables();
      var desplegable = document.getElementById('desplegable-' + opcion);
      if (desplegable) {
        // Elimina y vuelve a agregar la clase 'open' en el desplegable
        desplegable.classList.remove('open');
        setTimeout(function () {
          desplegable.classList.add('open');
        }, 10);
        desplegable.style.display = 'block';
      }
    }

    function ocultarDesplegables() {
      var desplegables = document.querySelectorAll('.desplegable');
      desplegables.forEach(function (item) {
        item.style.display = 'none';
        item.classList.remove('open');
      });
    }

document.addEventListener('DOMContentLoaded', function () {
  if (!localStorage.getItem('cookiesAccepted')) {
    mostrarCookiesOverlay();
  }
});

function mostrarCookiesOverlay() {
  document.getElementById('cookie-overlay').style.display = 'flex';
}

function ocultarCookiesOverlay() {
  document.getElementById('cookie-overlay').style.display = 'none';
}

function aceptarCookies() {
  localStorage.setItem('cookiesAccepted', true);
  ocultarCookiesOverlay();
}

function mostrarInformacionCookies() {
  alert("En serio, ¿alguien lee esto? Pero bueno:\n\n**Explorando Nuestra Gestión de Cookies y Medidas de Seguridad**\n\nCuando navegas por nuestro sitio, queremos que tengas una comprensión clara de cómo gestionamos las cookies y garantizamos la seguridad de tus datos. Aquí te presentamos nuestra filosofía detallada en relación con las cookies y las medidas de seguridad implementadas:\n\n**1. Cookies Esenciales:**\nEmpleamos cookies esenciales para garantizar que el sitio funcione de manera óptima. Estas cookies son fundamentales para proporcionar funciones básicas y asegurar una experiencia de usuario fluida.\n\n**2. Cookies de Rendimiento:**\nImplementamos cookies de rendimiento para analizar cómo interactúas con nuestro sitio, lo que nos permite mejorar continuamente la calidad y eficiencia de nuestros servicios.\n\n**3. Cookies de Funcionalidad:**\nUtilizamos cookies de funcionalidad para recordar tus preferencias y personalizar el contenido, brindándote una experiencia más personalizada y adaptada a tus necesidades.\n\n**4. Cookies de Terceros:**\nColaboramos con servicios externos que pueden utilizar cookies. Nos aseguramos de que esta colaboración sea transparente, proporcionándote información sobre los terceros y sus propósitos.\n\n**Medidas de Seguridad:**\n\n**5. Almacenamiento Seguro de Datos:**\nTodos tus datos se almacenan de forma segura, con medidas avanzadas para prevenir accesos no autorizados y salvaguardar tu información personal.\n\n**6. Notificación de Brechas de Seguridad:**\nEn el improbable caso de una violación de seguridad, te notificaremos de inmediato, cumpliendo con las leyes de protección de datos y permitiéndote tomar medidas adecuadas.\n\n**7. Desvinculación de Cookies:**\nTe ofrecemos la opción de desvincular cookies específicas o todas ellas, otorgándote un mayor control sobre tu experiencia de navegación y privacidad.\n\n**8. Actualización Periódica de Políticas:**\nNuestras políticas de cookies y privacidad se actualizan periódicamente. Te notificamos sobre cualquier cambio significativo, asegurándonos de que estés informado y cómodo con nuestras prácticas.\n\n**9. Educación sobre Cookies:**\nProporcionamos recursos educativos para que entiendas completamente cómo funcionan las cookies y cómo afectan tu privacidad, empoderándote con conocimiento.\n\n**10. Evaluación de Impacto de Privacidad:**\nCuando sea necesario, realizamos evaluaciones de impacto de privacidad para garantizar que nuestras prácticas respeten y protejan tus datos de manera efectiva.\n\n**11. Compromiso con la Privacidad Infantil:**\nNo recopilamos intencionalmente información de menores de 13 años y aplicamos medidas específicas para proteger la privacidad de los niños en línea.\n\n**12. Colaboración con Terceros:**\nAl colaborar con terceros, revisamos regularmente sus prácticas de privacidad para garantizar que estén alineadas con nuestros estándares y respeten tu privacidad.\n\n**13. Compatibilidad con Navegadores:**\nNos aseguramos de que nuestro sitio sea compatible con una variedad de navegadores, garantizando una experiencia consistente y segura para todos los usuarios.\n\n**14. Protocolos Seguros de Transmisión de Datos:**\nUtilizamos protocolos seguros para la transmisión de datos a través de Internet, protegiendo la integridad y confidencialidad de la información que compartes con nosotros.\n\n**15. Atención al Cliente Especializada:**\nContamos con un equipo de atención al cliente dedicado y capacitado para responder a tus preguntas y abordar cualquier inquietud relacionada con la privacidad y cookies.\n\nGracias por confiar en nosotros mientras exploras nuestro sitio. Estamos comprometidos a proporcionarte una experiencia segura, transparente y personalizada. ¡Disfruta de tu navegación!");
}

function toggleOptions() {
    var options = document.getElementById("options");
    var text = document.getElementById("dropdown-text");

    if (options.style.display === "none" || options.style.display === "") {
        options.style.display = "block";
        text.style.marginBottom = "0";

        // Show more information buttons
        var moreInfoButtons = document.getElementsByClassName("more-info");
        for (var i = 0; i < moreInfoButtons.length; i++) {
            moreInfoButtons[i].style.display = "inline-block";
        }
    } else {
        options.style.display = "none";
        text.style.marginBottom = "0";

        // Hide more information buttons
        var moreInfoButtons = document.getElementsByClassName("more-info");
        for (var i = 0; i < moreInfoButtons.length; i++) {
            moreInfoButtons[i].style.display = "none";
        }
    }
}

  function toggleOptions() {
      var options = document.getElementById("options");

      if (options.style.display === "none" || options.style.display === "") {
          options.style.display = "block";
      } else {
          options.style.display = "none";
      }
  }

  function showMoreInfo(infoId) {
      // Agrega la lógica necesaria para mostrar la información según el 'infoId'
      var infoElement = document.getElementById(infoId);
      // Agrega la lógica necesaria para mostrar la información
  }

//pruebas

