// Seleccionamos el canvas
const canvas = document.getElementById('jarvis-bg');
const ctx = canvas.getContext('2d');

// Ajustamos el tamaño al de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Creamos las líneas para el efecto Jarvis
let lines = [];
for (let i = 0; i < 100; i++) {
  lines.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, length: 100 + Math.random() * 200 });
}

// Función de dibujo animada
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  lines.forEach(line => {
    ctx.beginPath();
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 1;
    ctx.moveTo(line.x, line.y);
    ctx.lineTo(line.x + Math.sin(Date.now() / 1000) * 50, line.y + line.length);
    ctx.stroke();
  });
  requestAnimationFrame(draw);
}

// Ejecutamos la animación
draw();

// Ajustamos canvas si cambia el tamaño de la ventana
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
