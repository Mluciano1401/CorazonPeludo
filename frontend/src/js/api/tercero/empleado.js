const form = document.getElementById('form');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

form.addEventListener('submit', async(event)=> {
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  const tipoempleado = document.getElementById('tipoEmpleado').value;
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  const cedula = document.getElementById('cedula').value;
  const pasaporte = document.getElementById('pasaporte').value;
  const estadoCivil = document.getElementById('estadocivil').value;
  const sexo = document.getElementById('sexo').value;
  const licencia = document.getElementById('licencia').value;
  const puesto = document.getElementById('puestoLaboral').value;
  const sueldo = document.getElementById('sueldo').value;  
  const fechaIngreso = document.getElementById('fechaIngreso').value;  
  const foto = document.getElementById('foto').value;
  const idpersona = 0;
  const status = document.getElementById('status').value;   
   
   // Crea una solicitud HTTP
  const url = 'http://localhost:3000/persona';
  const data = { 
      nobre: nombre ? nombre : "",
      apellido: apellido ? apellido : "",
      cedula: cedula ? cedula : "",
      pasaporte: pasaporte ? pasaporte : "",
      email: email ? email : "",
      estadoCivil: estadoCivil,
      sexo: sexo ? sexo : "",
      licenciaConducir: licencia ? licencia : "",
      tipoPersona: 1,
      fechaNacimiento: fechaNacimiento ? fechaNacimiento : null,
      foto: foto ? foto : "",
      fechaModificacion: new Date(),
      status: (status == '0') ? false : true 
  };
  try {
    console.log(data,data2);
    console.log(JSON.stringify(data));
    const response = await fetch(url, { // Replace with your API URL
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    let response2 = undefined;
    if(response.ok){
      idpersona = response.data.personaId;
      const url2 = 'http://localhost:3000/empleado';
      const data2 = { 
        personaId:idpersona,
        tipoEmpleado:tipoempleado,
        puesto: puesto ? puesto : "",
        sueldo:sueldo ? sueldo : 0,
        fechaIngreso: fechaIngreso ? fechaIngreso : new Date(),
        fechaModificacion: new Date(),
        status: (status == '0') ? false : true 
      };
      response2 = await fetch(url2, { // Replace with your API URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data2)
      });
    }
    
    if (response2.ok) {
      form.reset(); // Clear form after successful submission
    } else {
      console.error('Error:', await response.text()); // Log detailed error
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
async function getData(){
  await fetch('http://localhost:3000/estadocivil') // Replace with your actual backend URL
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    // Process and populate the select options
    populateSelectOptions(data);
    const select = document.getElementById('estadocivil');
    select.addEventListener('change', () => {
      const selectedId = select.value;
      const selectedData = data.data.find(item => item.estadoCivilId === selectedId); // Find selected item
      if (selectedData) {
        const dataDisplay = document.getElementById('data-display1');
        dataDisplay.textContent = JSON.stringify(selectedData, null, 2); // Display selected data
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  await fetch('http://localhost:3000/tipoempleado') // Replace with your actual backend URL
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    // Process and populate the select options
    selectOptions(data);
    const select = document.getElementById('tipoEmpleado');
    select.addEventListener('change', () => {
      const selectedId = select.value;
      const selectedData = data.data.find(item => item.tipoEmpleadoId === selectedId); // Find selected item
      if (selectedData) {
        const dataDisplay = document.getElementById('data-display');
        dataDisplay.textContent = JSON.stringify(selectedData, null, 2); // Display selected data
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  
}
function populateSelectOptions(data) {
  const select = document.getElementById('estadocivil');
  // Clear existing options
  select.options.length = 0;

  // Add an option for each data item
  data.data.forEach(item => {
    const option = document.createElement('option');
    option.value = item.estadoCivilId; // Replace with your data item's ID property
    option.text = item.descripcion; // Replace with your data item's label property
    select.appendChild(option);
  });
}

function selectOptions(data) {
  const select = document.getElementById('tipoEmpleado');
  // Clear existing options
  select.options.length = 0;

  // Add an option for each data item
  data.data.forEach(item => {
    const option = document.createElement('option');
    option.value = item.tipoEmpleadoId; // Replace with your data item's ID property
    option.text = item.descripcion; // Replace with your data item's label property
    select.appendChild(option);
  });
}


getData();