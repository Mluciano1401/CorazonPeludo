const form = document.getElementById('form');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

form.addEventListener('submit', async (event) =>{
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  const descripcion = document.getElementById('descripcion').value;

   const status = document.getElementById('status').value;    // Crea una solicitud HTTP
    let url = '';
  if(id){
    url = 'http://localhost:3000/estadoemergencia/update/';
  }else{
    url = 'http://localhost:3000/estadoemergencia';
  }
   const data = {  
      id: id ? id : null,
      descripcion: descripcion,
      fechaModificacion: new Date(),
      status: (status == '0') ? false : true 
  };
    try {
    console.log(data);
    console.log(JSON.stringify(data));
    const response = await fetch(url, { // Replace with your API URL
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      form.reset(); // Clear form after successful submission
    } else {
      console.error('Error:', await response.text()); // Log detailed error
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
async function getData(){
  await fetch(`http://localhost:3000/estadoemergencia/${id}`) // Replace with your actual backend URL
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    // Process and populate the select options
    idEspecie.value = id;
    descripcion.value = data.data.descripcion;
    fechaModificacion.value = data.data.fechaModificacion;
    status.value = data.data.status;
  })
}
getData();