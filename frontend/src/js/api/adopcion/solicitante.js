const form = document.getElementById('form');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

form.addEventListener('submit', async (event) =>{
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const cedula = document.getElementById('cedula').value;
  const sexo = document.getElementById('sexo').value;

   const status = document.getElementById('status').value;    // Crea una solicitud HTTP
  const url = 'http://localhost:3000/solicitante';
  const data = { 
      nombre: nombre ? nombre:"",
      apellido: apellido ? apellido:"",
      email: email ? email:"",
      telefono: telefono ? telefono:"",
      cedula: cedula ? cedula:"",
      sexo: sexo ? sexo:"",
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