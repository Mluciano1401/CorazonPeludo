const form = document.getElementById('form');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

form.addEventListener('submit', async (event) =>{
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  const alias = document.getElementById('alias').value;
  const edad = document.getElementById('edad').value;
  const peso = document.getElementById('peso').value;
  const tipoPiel = document.getElementById('TipoPiel').value;  
  const especie = document.getElementById('especie').value;
  const sexo = document.getElementById('sexo').value;
  const origen = document.getElementById('origen').value;
  const amputaciones = document.getElementById('amputaciones').value;
  const tipoAmputacion = document.getElementById('tipoAmputacion').value;
  const estado = document.getElementById('estado').value;
  const fechaIngreso = document.getElementById('fechaIngreso').value;
  const colorFifisco = document.getElementById('colorFisico').value;
  const colorOjos = document.getElementById('colorOjos').value;


   const status = document.getElementById('status').value;    // Crea una solicitud HTTP
  const url = 'http://localhost:3000/animal';
  const data = { 
      alias:alias,
      edad: edad,
      peso: peso,
      tipoPiel: tipoPiel,
      especie: especie,
      sexo: sexo,
      origen: origen,
      amputaciones: amputaciones,
      tipoAmputacion: tipoAmputacion,
      estado: estado,
      fechaIngreso: fechaIngreso,
      colorFisico: colorFifisco,
      colorOjos: colorOjos,
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
//funcion para los enums
const select = document.getElementById('mySelect');

fetch('URL_DEL_BACKEND')
  .then(response => response.json())
  .then(data => {
    // Recorre los datos obtenidos del backend
    data.forEach(option => {
      // Crea un elemento 'option' para cada valor y texto obtenido
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.text = option.text;
      
      // Agrega el elemento 'option' al 'select'
      select.appendChild(optionElement);
    });
  });
//para visualizar en las consultas
  fetch('URL_DEL_BACKEND')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('#myTable tbody');

    // Recorre los datos obtenidos del backend
    data.forEach(rowData => {
      // Crea una nueva fila en la tabla
      const row = document.createElement('tr');

      // Crea las celdas de la fila y asigna los valores de los datos
      Object.values(rowData).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      });

      // Agrega la fila a la tabla
      tableBody.appendChild(row);
    });
  });