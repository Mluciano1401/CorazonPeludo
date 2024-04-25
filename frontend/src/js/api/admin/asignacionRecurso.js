const form = document.getElementById('form');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  const tarea = document.getElementById('tarea').value;
  const producto = document.getElementById('producto').value;
  const estado = document.getElementById('estado').value;
  const fecha = document.getElementById('fecha').value;
  const tipoRecurso = document.getElementById('tipoRecurso').value;
  const fechaModificacion = document.getElementById('fechaModificacion').value;
  const status = document.getElementById('status').value;
  // Crea una solicitud HTTP
    let url = '';
  if(id){
    url = 'http://localhost:3000/asignacionRecurso/update/';
  }else{
    url = 'http://localhost:3000/asignacionRecurso';
  }
   const data = {  
      id: id ? id : null,
      tarea: tarea?tarea : null,
      producto: producto ? producto : null,
      estado: estado ? estado : null,
      fecha: fecha ? fecha : new Date(),
      tipoRecurso: tipoRecurso ? tipoRecurso : null,
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
  await fetch(`http://localhost:3000/asignaciorecurso/${id}`) // Replace with your actual backend URL
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    // Process and populate the select options
    idEspecie.value = id;
    tarea.value = data.data.tarea;
    producto = data.data.producto;
    tipoRecurso = data.data.tipoRecurso;
    fechaModificacion.value = data.data.fechaModificacion;
    status.value = data.data.status;
  })
  await fetch('http://localhost:3000/tarea') // Replace with your actual backend URL
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    // Process and populate the select options
    populateSelectOptions(data);
    const select = document.getElementById('tipoUser');
    select.addEventListener('change', () => {
      const selectedId = select.value;
      const selectedData = data.data.find(item => item.id === selectedId); // Find selected item
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
  const select = document.getElementById('tipoUser');
  // Clear existing options
  select.options.length = 0;

  // Add an option for each data item
  data.data.forEach(item => {
    const option = document.createElement('option');
    option.value = item.id; // Replace with your data item's ID property
    option.text = item.descripcion; // Replace with your data item's label property
    select.appendChild(option);
  });
}

getData();