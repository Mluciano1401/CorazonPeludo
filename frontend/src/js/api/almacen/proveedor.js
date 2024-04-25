const form = document.getElementById('form');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

form.addEventListener('submit', async (event) =>{
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const nombreCompania = document.getElementById('nombreCompania').value;
  const rnc = document.getElementById('rnc').value;
  const documento = document.getElementById('documento').value;
  const sexo = document.getElementById('sexo').value;

   const status = document.getElementById('status').value;    // Crea una solicitud HTTP
    let url = '';
  if(id){
    url = 'http://localhost:3000/proveedor/update/';
  }else{
    url = 'http://localhost:3000/proveedor';
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