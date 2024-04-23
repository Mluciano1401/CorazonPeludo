const form = document.getElementById('form');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Recopilando los datos del formulario
  const idCita = document.getElementById('idCita').value;
  const nombre = document.getElementById('name').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const mySelect = document.getElementById('mySelect').value;
  const nombreAnimal = document.getElementById('nombreAnimal').value;
  const fechaCita = document.getElementById('fechaCita').value;
  const hora = document.getElementById('hora').value;
  const status = document.getElementById('status').value;  
  const url = 'http://localhost:3000/solicitante';

  const data = {
    idCita,
    nombre,
    apellido,
    email,
    telefono,
    mySelect,
    nombreAnimal,
    fechaCita,
    hora,
    fechaModificacion: new Date(),
    status: (status == '0') ? false : true
  };
  try {
    console.log(data);
    console.log(JSON.stringify(data));
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      form.reset(); // Para limpiar el formulario
    } else {
      console.error('Error:', await response.text()); // error
    }
  } catch (error) {
    console.error('Error:', error);
  }
});