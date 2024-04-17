function mostrarCampos() {
    if (document.getElementById("persona").checked) {
        document.getElementById("campoCedula").style.display = "block";
        document.getElementById("campodoc").style.display = "block";
        document.getElementById("campoNombre").style.display = "block";
        document.getElementById("campoApellido").style.display = "block";
        document.getElementById("campoGenero").style.display = "block";
        document.getElementById("campoFechaN").style.display = "block";

        document.getElementById("campoRNC").style.display = "none";
        document.getElementById("campoNombreCompania").style.display = "none";
        document.getElementById("campoPersonaContacto").style.display = "none";
        document.getElementById("campoCargo").style.display = "none";

 
    } else if (document.getElementById("compania").checked) {
        document.getElementById("campoCedula").style.display = "none";
        document.getElementById("campodoc").style.display = "none";
        document.getElementById("campoNombre").style.display = "none";
        document.getElementById("campoApellido").style.display = "none"; 
        document.getElementById("campoGenero").style.display = "none"; 
        document.getElementById("campoFechaN").style.display = "none"; 

        document.getElementById("campoRNC").style.display = "block";
        document.getElementById("campoNombreCompania").style.display = "block";
        document.getElementById("campoPersonaContacto").style.display = "block";
        document.getElementById("campoCargo").style.display = "block";

    }
}





  function activar() {
    var dependencia = document.getElementById("dependencia").value;
    var campoDepen = document.getElementById("numeroDependientes");

    if (dependencia === "Si") {
      campoDepen.disabled = false ;
    } else if (dependencia === "No") {
      campoDepen.disabled = true;
    }
  }

  


  function activarLicencia() {
    var selectlicencia = document.getElementById("selectlicencia").value;
    var campoLicencia = document.getElementById("licencia");

    if (selectlicencia === "1") {
      campoLicencia.disabled = false ;
    } else if (selectlicencia === "0") {
      campoLicencia.disabled = true;
    }
  } 

  //DATATABLE
document.addEventListener('DOMContentLoaded', () => {
  // Realizar la solicitud al backend para obtener los datos de animales
  fetch('http://localhost:3000/animales') // Ajusta la URL según la configuración de tu servidor NestJS
    .then(response => response.json())
    .then(data => {
      // Obtener la tabla donde se mostrarán los datos
      const table = document.querySelector('.datatable');

      // Iterar sobre los datos y crear filas en la tabla
      data.forEach(animal => {
        const row = table.insertRow();
        row.insertCell(0).textContent = animal.id.toString(); // Suponiendo que tienes un campo 'id' en tu entidad Animal
        row.insertCell(1).textContent = animal.nombre; // Suponiendo que tienes un campo 'nombre' en tu entidad Animal
        // Inserta más celdas según las columnas que desees mostrar en tu DataTable
      });

      // Inicializar el DataTable de Bootstrap 5
      new simpleDatatables.DataTable('.datatable', {
        searchable: false, // Opcional: desactiva la búsqueda si no la necesitas
      });
    })
    .catch(error => console.error('Error al obtener animales:', error));
});