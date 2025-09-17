// Cambiar el primer "Hola Mundo" (id="main-heading") a "Adiós"
const mainHeading = document.getElementById('main-heading');
if (mainHeading) {
  mainHeading.textContent = 'Adiós';
}

// Cambiar el color de la fuente de un encabezado a naranja
// Aquí tomamos el segundo H1 (index 1) si existe
const h1s = document.querySelectorAll('h1');
if (h1s.length > 1) {
  h1s[1].style.color = 'orange';
}

// También dejamos un botón para que puedas activarlo manualmente
const orangeBtn = document.getElementById('orange-btn');
if (orangeBtn && h1s.length > 1) {
  orangeBtn.addEventListener('click', () => {
    h1s[1].style.color = 'orange';
  });
}

// Añadir comportamiento clic al encabezado para cambiar a marrón
const clickable = document.getElementById('clickable-heading');
if (clickable) {
  clickable.addEventListener('click', () => {
    clickable.style.color = 'brown';
  });
}