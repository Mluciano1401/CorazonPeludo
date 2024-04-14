function enviarDatos(url,data){
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      enviarSolicitud(url,options);
}
function traerDatos(url){
  const options = {    
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  enviarSolicitud(url,options);
}

function borrarDato(url,id){
  const options = {    
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    id: id
  }
  enviarSolicitud(url,options);
}
function actualizar(url,data,id){
  const options = {    
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    id: id,
    body: JSON.stringify(data)
  }
  enviarSolicitud(url,options);
}
function enviarSolicitud(url,options){
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
}

window.actualizar = actualizar;
window.borrarDato = borrarDato;
window.traerDatos = traerDatos;
window.enviarDatos = enviarDatos;