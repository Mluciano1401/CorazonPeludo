const form = document.getElementById('form');

form.addEventListener('submit', async (event) =>{
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  const sucursal = document.getElementById('registro-almacen-sucursal').value;
  const tipoAlmacen = document.getElementById('registro-almacen-tipoAlmacen').value;
  const capacidad = document.getElementById('registro-almacen-capacidad').value;
  
   const status = document.getElementById('status').value;    // Crea una solicitud HTTP
  const url = 'http://localhost:3000/almacen';
  const data = { 
      sucursal: sucursal,
      tipoAlmacen: tipoAlmacen,
      capacidad: capacidad,
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
  await fetch('http://localhost:3000/sucursal') // Replace with your actual backend URL
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    // Process and populate the select options
    populateSelectOptions(data);
    const select = document.getElementById('sucursal');
    select.addEventListener('change', () => {
      const selectedId = select.value;
      const selectedData = data.data.find(item => item.sucursalId === selectedId); // Find selected item
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
  const select = document.getElementById('sucursal');
  // Clear existing options
  select.options.length = 0;

  // Add an option for each data item
  data.data.forEach(item => {
    const option = document.createElement('option');
    option.value = item.sucursalId; // Replace with your data item's ID property
    option.text = item.descripcion; // Replace with your data item's label property
    select.appendChild(option);
  });
}


getData();