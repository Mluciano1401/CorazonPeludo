const form = document.getElementById('form');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

form.addEventListener('submit', async (event) =>{
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const lote = document.getElementById('lote').value;
  const marca = document.getElementById('marca').value;
  const costo = document.getElementById('costo').value;
  const tipoProducto = document.getElementById('tipoProducto').value;
  const fechaVencimiento = document.getElementById('fechaVencimiento').value;

   const status = document.getElementById('status').value;    // Crea una solicitud HTTP
  const url = 'http://localhost:3000/producto';
  const data = { 
      nombre: nombre,
      lote: lote,
      costo: costo,
      marca: marca,
      tipoProducto: tipoProducto,
      fechaVencimiento: fechaVencimiento,
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