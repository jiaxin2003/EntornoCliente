const form = document.getElementById('formNota');
const input = document.getElementById('nota');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', e => {
  e.preventDefault();
  let valor = input.value.trim().replace(',', '.');
  const nota = parseFloat(valor);

  if (valor === '' || isNaN(nota)) {
    mensaje.textContent = 'Error: introduce un número';
    mensaje.style.color = 'red';
    return;
  }

  if (nota < 0 || nota > 10) {
    mensaje.textContent = 'Error: la nota debe estar entre 0 y 10.';
    mensaje.style.color = 'red';
    return;
  }

  let calificacion;
  if (nota < 5) calificacion = 'Suspenso';
  else if (nota < 6) calificacion = 'Aprobado';
  else if (nota < 7) calificacion = 'Bien';
  else if (nota < 9) calificacion = 'Notable';
  else calificacion = 'Sobresaliente';

  const resultado = calificacion;
  mensaje.textContent = resultado;
  if (nota < 5) {
    mensaje.style.color = 'red';
  } else {
    mensaje.style.color = 'green';
  }
  console.log(resultado);
  });