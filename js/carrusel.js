const images = [
  './img/evento.jpg',
  './img/bosque.jpg',
  './img/ucompensar.jpg',
  './img/ucompensar.jpg'
  
];

let i = 0;

function cambiarFondo() {
  i = (i + 1) % images.length;
  document.body.style.backgroundImage = `url('${images[i]}')`;
}

// Cambiar cada 5 segundos
setInterval(cambiarFondo, 5000);

// Inicial
document.body.style.backgroundImage = `url('${images[i]}')`;
