const form = document.getElementById('form');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const tipoDocumento = document.getElementById('tipoDocumento').value;
  const documento = document.getElementById('documento').value;
  const estadoCivil = document.getElementById('estadoCivil').value;
  const sexo = document.getElementById('sexo').value;
  const numeroPersonas = document.getElementById('numeroPersonas').value;
  const conocerAceptacion = document.getElementById('conocerAceptacion').value;
  const situacionFamiliar = document.getElementById('situacionFamiliar').value;
  const ingresosMensuales = document.getElementById('ingresosMensuales').value;
  const dependencia = document.getElementById('dependencia').value;
  const soyDependiente = document.getElementById('soyDependiente').value;
  const dependientes = document.getElementById('dependientes').value;
  const numeroDependientes = document.getElementById('numeroDependientes').value;
  const actividadEconomica = document.getElementById('actividadEconomica').value;
  const fechaIngreso = document.getElementById('fechaIngreso').value;
  const ninos = document.getElementById('ninos').value;
  const cantidadNinos = document.getElementById('cantidadNinos').value;
  const camposEdadNinos = document.getElementById('camposEdadNinos').value;
  const otrosAnimales = document.getElementById('otrosAnimales').value;
  const cantidadOtrosAnimales = document.getElementById('cantidadOtrosAnimales').value;
  const vacunados = document.getElementById('vacunados').value;
  const desparasitados = document.getElementById('desparasitados').value;
  const esterilizados = document.getElementById('esterilizados').value;

  const status = document.getElementById('status').value;    // Crea una solicitud HTTP
  const url = 'http://localhost:3000/solicitante';

  const data = {
    nombre,
    apellido,
    email,
    telefono,
    tipoDocumento,
    documento,
    estadoCivil,
    numeroPersonas,
    conocerAceptacion,
    situacionFamiliar,
    ingresosMensuales,
    dependencia,
    soyDependiente,
    dependientes,
    numeroDependientes,
    actividadEconomica,
    fechaIngreso,
    ninos,
    cantidadNinos,
    camposEdadNinos,
    otrosAnimales,
    cantidadOtrosAnimales,
    vacunados,
    desparasitados,
    esterilizados,
    sexo,
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