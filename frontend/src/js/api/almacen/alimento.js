const form = document.getElementById('form');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

form.addEventListener('submit', async (event) =>{
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  const nombre = document.getElementById('registro-alimentos-nombre').value;
  const lote = document.getElementById('registro-alimentos-lote').value;
  const marca = document.getElementById('registro-alimentos-marca').value;
  const costo = document.getElementById('registro-alimentos-costo').value;
  const tipoAlimento = document.getElementById('tipoAlimento').value;
  const contenido = document.getElementById('registro-alimentos-contenido').value;
  const unidadMedida = document.getElementById('unidadMedida').value;
  const fechavencimiento= document.getElementById('registro-alimentos-fechaVencimiento').value;
  const idproduct = 0;
   const status = document.getElementById('status').value;    // Crea una solicitud HTTP
  const url = 'http://localhost:3000/producto';
  const data = { 
      descripcion: nombre,
      lote: lote,
      tipoProducto: 1,
      marca: marca,
      costo: costo,
      fechaVencimiento: fechavencimiento,
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
    const url2 = 'http://localhost:3000/alimento';
    idproduct = response.data.productoId;
    const data2 = {
      tipoAlimento: tipoAlimento,
      contenido: contenido,
      unidadMedida: unidadMedida,
      productoId: idproduct,
      fechaModificacion: new Date(),
      status: (status == '0') ? false : true 
    };
    const response2 = await fetch(url2, { // Replace with your API URL
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data2)
    });
    if (response.ok && response2.ok) {
      form.reset(); // Clear form after successful submission
    } else {
      console.error('Error:', await response.text()); // Log detailed error
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
async function getData(){
  await fetch('http://localhost:3000/tipoalimento') // Replace with your actual backend URL
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    // Process and populate the select options
    populateSelectOptions(data);
    const select = document.getElementById('tipoAlimento');
    select.addEventListener('change', () => {
      const selectedId = select.value;
      const selectedData = data.data.find(item => item.tipoAlimentoId === selectedId); // Find selected item
      if (selectedData) {
        const dataDisplay = document.getElementById('data-display');
        dataDisplay.textContent = JSON.stringify(selectedData, null, 2); // Display selected data
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  await fetch('http://localhost:3000/marca') // Replace with your actual backend URL
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    // Process and populate the select options
    populateSelectOptions(data);
    const select = document.getElementById('marca');
    select.addEventListener('change', () => {
      const selectedId = select.value;
      const selectedData = data.data.find(item => item.marcaId === selectedId); // Find selected item
      if (selectedData) {
        const dataDisplay = document.getElementById('data-display1');
        dataDisplay.textContent = JSON.stringify(selectedData, null, 2); // Display selected data
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}
function populateSelectOptions(data) {
  const select = document.getElementById('tipoAlimento');
  // Clear existing options
  select.options.length = 0;

  // Add an option for each data item
  data.data.forEach(item => {
    const option = document.createElement('option');
    option.value = item.tipoAlimentoId; // Replace with your data item's ID property
    option.text = item.descripcion; // Replace with your data item's label property
    select.appendChild(option);
  });
}
function selectOptions(data) {
  const select = document.getElementById('marca');
  // Clear existing options
  select.options.length = 0;

  // Add an option for each data item
  data.data.forEach(item => {
    const option = document.createElement('option');
    option.value = item.marcaId; // Replace with your data item's ID property
    option.text = item.descripcion; // Replace with your data item's label property
    select.appendChild(option);
  });
}

getData();