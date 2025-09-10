const koala = document.querySelector(".koala");
const eyes = document.querySelectorAll(".eye");

// Función para agregar comportamiento a cada input de contraseña
function setupPasswordToggle(inputId, toggleId) {
  const input = document.getElementById(inputId);
  const toggle = document.getElementById(toggleId);

  // Efecto cuando se enfoca
  input.addEventListener("focus", () => {
    koala.classList.add("cover-eyes");
    eyes.forEach(eye => eye.classList.add("closed"));
  });

  input.addEventListener("blur", () => {
    koala.classList.remove("cover-eyes");
    eyes.forEach(eye => eye.classList.remove("closed"));
  });

  // Mostrar contraseña mientras se presiona el botón
  toggle.addEventListener("mousedown", () => {
    input.focus();
    input.type = "text";
    koala.classList.remove("cover-eyes");
    eyes.forEach(eye => eye.classList.remove("closed"));
  });

  toggle.addEventListener("mouseup", () => {
    input.type = "password";
    koala.classList.add("cover-eyes");
    eyes.forEach(eye => eye.classList.add("closed"));
  });

  toggle.addEventListener("mouseleave", () => {
    input.type = "password";
    koala.classList.add("cover-eyes");
    eyes.forEach(eye => eye.classList.add("closed"));
  });
}

// Aplicar a ambos inputs
setupPasswordToggle("password", "togglePassword");
setupPasswordToggle("confirmPassword", "toggleConfirmPassword");

// Mensaje de confirmación al enviar el formulario
document.getElementById("formRegistro").addEventListener("submit", (e) => {
  e.preventDefault();
  Swal.fire({
    title: "¡Registro exitoso!",
    text: "Tu cuenta ha sido creada",
    icon: "success",
    confirmButtonText: "OK"
  });
});
