console.log('Mercadologo sitio cargado');

document.querySelector('.btn-primary').addEventListener('click', () => {
  alert('¡Bienvenido! Esta es una demostración.');
  document.querySelector('#productos').scrollIntoView({ behavior: 'smooth' });
});
