const form = document.getElementById('form');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

form.addEventListener('submit', async(event) => {
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const compania = document.getElementById('compania').value;
  const rnc = document.getElementById('rnc').value;
  const tipoEmpresa = document.getElementById('tipoEmpresa').value;

   const status = document.getElementById('status').value;    // Crea una solicitud HTTP
  const url = 'http://localhost:3000/sucursal';
  const data = { 
      descripcion: nombre,
      compania: compania,
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
  await fetch('http://localhost:3000/persona') // Replace with your actual backend URL
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    // Process and populate the select options
    populateSelectOptions(data);
    const select = document.getElementById('compania');
    select.addEventListener('change', () => {
      const selectedId = select.value;
      const selectedData = data.data.find(item => item.personaId === selectedId); // Find selected item
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
  const select = document.getElementById('compania');
  // Clear existing options
  select.options.length = 0;
  const option = document.createElement('option');
  option.value = ""; // Replace with your data item's ID property
  option.text = "Selecciona Una Opcion...";
  // Add an option for each data item
  data.data.forEach(item => {
    const option = document.createElement('option');
    option.value = item.personaId; // Replace with your data item's ID property
    option.text = item.nombre; // Replace with your data item's label property
    select.appendChild(option);
  });
}


getData();