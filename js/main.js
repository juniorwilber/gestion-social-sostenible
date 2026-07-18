// Funciones del sitio - Examen Final de Diseño Web

document.addEventListener("DOMContentLoaded", function () {

  // Mostrar el año actual en el pie de página
  var anio = document.querySelector("[data-current-year]");
  if (anio) {
    anio.textContent = new Date().getFullYear();
  }

  // Contador de caracteres del mensaje
  var mensaje = document.getElementById("message");
  var contador = document.getElementById("messageCount");
  if (mensaje && contador) {
    mensaje.addEventListener("input", function () {
      contador.textContent = mensaje.value.length;
    });
  }

  // Validación del formulario de admisión
  var form = document.getElementById("admissionForm");
  if (!form) {
    return;
  }

  var exito = document.getElementById("formSuccess");
  var errorResumen = document.getElementById("formErrorSummary");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // checkValidity revisa required, email, teléfono (pattern), términos, etc.
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      exito.classList.add("d-none");
      errorResumen.classList.remove("d-none");

      // Llevar el foco al primer campo con error
      var primero = form.querySelector(":invalid");
      if (primero) {
        primero.focus();
      }
      return;
    }

    // Si todo está correcto: mostrar mensaje de éxito y limpiar
    form.classList.remove("was-validated");
    errorResumen.classList.add("d-none");
    exito.classList.remove("d-none");
    form.reset();
    if (contador) {
      contador.textContent = "0";
    }
    exito.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
