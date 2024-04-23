const form = document.getElementById('form');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

form.addEventListener('submit', async (event) =>{
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  const alias = document.getElementById('alias').value;
  const edad = document.getElementById('edad').value;
  const peso = document.getElementById('peso').value;
  const tipoPiel = document.getElementById('tipoPiel').value;  
  const especie = document.getElementById('especie').value;
  const sexo = document.getElementById('sexo').value;
  //const origen = document.getElementById('origen').value;
  //const amputaciones = document.getElementById('amputaciones').value;
  //const tipoAmputacion = document.getElementById('tipoAmputacion').value;
  //const estado = document.getElementById('estado').value;
  const fechaIngreso = document.getElementById('fechaIngreso').value;
  //const colorFifisco = document.getElementById('colorFisico').value;
  //const colorOjos = document.getElementById('colorOjos').value;


  const status = document.getElementById('status').value;    // Crea una solicitud HTTP
  const url = 'http://localhost:3000/animal';
  const data = { 
      alias:alias ? alias : "",
      edad: edad ? edad : 0,
      peso: peso ? peso : 0,
      especie: especie,
      sexo: sexo ? sexo : "",
      origen: 0,
      fechaIngreso: fechaIngreso ? fechaIngreso : new Date(),
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
    console.log(response);
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
  await fetch('http://localhost:3000/tipopiel') // Replace with your actual backend URL
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    // Process and populate the select options
    populateSelectOptions(data);
    const select = document.getElementById('tipoPiel');
    select.addEventListener('change', () => {
      const selectedId = select.value;
      const selectedData = data.data.find(item => item.tipoPielId === selectedId); // Find selected item
      if (selectedData) {
        const dataDisplay = document.getElementById('data-display1');
        dataDisplay.textContent = JSON.stringify(selectedData, null, 2); // Display selected data
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  await fetch('http://localhost:3000/especie') // Replace with your actual backend URL
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    // Process and populate the select options
    selectOptions(data);
    const select = document.getElementById('especie');
    select.addEventListener('change', () => {
      const selectedId = select.value;
      const selectedData = data.data.find(item => item.especieId === selectedId); // Find selected item
      if (selectedData) {
        const dataDisplay = document.getElementById('data-display0');
        dataDisplay.textContent = JSON.stringify(selectedData, null, 2); // Display selected data
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  
}
function populateSelectOptions(data) {
  const select = document.getElementById('tipoPiel');
  // Clear existing options
  select.options.length = 0;

  // Add an option for each data item
  data.data.forEach(item => {
    const option = document.createElement('option');
    option.value = item.tipoPielId; // Replace with your data item's ID property
    option.text = item.descripcion; // Replace with your data item's label property
    select.appendChild(option);
  });
}

function selectOptions(data) {
  const select = document.getElementById('especie');
  // Clear existing options
  select.options.length = 0;

  // Add an option for each data item
  data.data.forEach(item => {
    const option = document.createElement('option');
    option.value = item.especieId; // Replace with your data item's ID property
    option.text = item.descripcion; // Replace with your data item's label property
    select.appendChild(option);
  });
}
getData();