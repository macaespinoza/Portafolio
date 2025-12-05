const colores = [
  '--amarillo',
  '--turquesa',
  '--rosado',
  '--morado',
  '--verde-bosque'
];

document.addEventListener('DOMContentLoaded', function () {
  document.body.style.background = getComputedStyle(document.documentElement).getPropertyValue('--amarillo');
});

let indiceColor = 0;

document.getElementById('cambiar-fondo').addEventListener('click', function () {
  indiceColor = (indiceColor + 1) % colores.length;
  const color = colores[indiceColor];
  document.body.style.background = getComputedStyle(document.documentElement).getPropertyValue(color);
});
