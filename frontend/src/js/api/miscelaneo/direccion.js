const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  const calle = document.getElementById('calle').value;

  // Crea una solicitud HTTP
  const url = 'http://localhost:3000/direccion';
  const data = { 
      calle: calle,
      fechaModificacion: new Date().toLocaleDateString()
  };
  enviarDatos(url,data);
});