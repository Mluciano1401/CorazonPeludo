const form = document.getElementById('formanimal');

form.addEventListener('submit', async (event) =>{
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  const descripcion = document.getElementById('descripcion').value;

   const status = document.getElementById('status').value;    // Crea una solicitud HTTP
  const url = 'http://localhost:3000/animal';
  const data = { 
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