const form = document.getElementById('formtipousuario');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  //aqui se colocan los ids de los inputs
  const descripcion = document.getElementById('descripcion').value;

  // Crea una solicitud HTTP
  const url = 'http://localhost:3000/solicitudadopcion';
  const data = { 
      descripcion: descripcion,
      fechaModificacion: new Date().toLocaleDateString()
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  // Envía la solicitud a la API
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      // Maneja la respuesta de la API
      console.log(data);
    })
    .catch(error => {
      // Maneja los errores de la API
      console.error(error);
    });
});