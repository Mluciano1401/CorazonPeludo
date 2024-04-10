const form = document.getElementById('formtipousuario');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  const descripcion = document.getElementById('descripcion').value;

  // Crea una solicitud HTTP
  const url = 'http://localhost:3000/rasgosfisicos';
  const data = { 
      descripcion: descripcion,
      fechaModificacion: new Date().toLocaleDateString()
  };
  enviarDatos(url,data);
});