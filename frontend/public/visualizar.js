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
    var campoDepen = document.getElementById("soyDependiente");

    if (dependencia === "Si") {
      campoDepen.disabled = false ;
    } else if (dependencia === "No") {
      campoDepen.disabled = true;
    }
  }
  

  function activarDependientes() {
    var dependencia = document.getElementById("dependientes").value;
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


function cantidadPersonas() {
  const inputNumeroPersonas = document.getElementById("numeroPersonas");
  const selectConocerAceptacion = document.getElementById("conocerAceptacion");

  function toggleSelect() {
    const valorInput = parseInt(inputNumeroPersonas.value);
    if (valorInput === 0 || valorInput === 1) {
      selectConocerAceptacion.disabled = true;
      selectConocerAceptacion.value = "";
    } else {
      selectConocerAceptacion.disabled = false;
    }
  }

  inputNumeroPersonas.addEventListener("input", toggleSelect);
}

// Llamada a la función al cargar el DOM
document.addEventListener("DOMContentLoaded", toggleSelectBasedOnInput);







function activarOtrosAnimales() {
  var otrosAnimales = document.getElementById("otrosAnimales").value;
  var campoCantidad = document.getElementById("cantidadOtrosAnimales");
  var campoVacunados = document.getElementById("vacunados");
  var campoDesparasitados = document.getElementById("desparasitados");
  var campoEsterilizados = document.getElementById("esterilizados");
  
  if (otrosAnimales === "Si") {
    campoCantidad.disabled = false ;
  } else if (otrosAnimales === "No") {
    campoCantidad.disabled = true;
    campoVacunados.disabled = true;
    campoDesparasitados.disabled = true;
    campoEsterilizados.disabled = true;
  }
}    


function activarCantNinos() {
  var ninos = document.getElementById("ninos").value;
  var campoCantidadNinos = document.getElementById("cantidadNinos");
  
  if (ninos === "Si") {
    campoCantidadNinos.disabled = false ;
  } else if (ninos === "No") {
    campoCantidadNinos.disabled = true;
   
  }
}   




function generarCamposEdadNinos() {
  const cantidadNinosInput = document.getElementById("cantidadNinos");
  const camposEdadNinosContainer = document.getElementById("camposEdadNinos");

  // Limpiar campos existentes
  camposEdadNinosContainer.innerHTML = "";

  const cantidadNinos = parseInt(cantidadNinosInput.value);
  if (cantidadNinos > 0) {
    for (let i = 1; i <= cantidadNinos; i += 2) {
      const divRow = document.createElement("div");
      divRow.classList.add("row", "mb-3");

      const divCol1 = document.createElement("div");
      divCol1.classList.add("col-md-6", "mb-3");

      const label1 = document.createElement("label");
      label1.setAttribute("for", "edadNino" + i);
      label1.textContent = "Edad del " + i + "º niño/a";

      const input1 = document.createElement("input");
      input1.setAttribute("type", "number");
      input1.setAttribute("class", "form-control");
      input1.setAttribute("id", "edadNino" + i);
      input1.setAttribute("required", "");

      divCol1.appendChild(label1);
      divCol1.appendChild(input1);

      let divCol2, label2, input2;
      if (i + 1 <= cantidadNinos) {
        divCol2 = document.createElement("div");
        divCol2.classList.add("col-md-6", "mb-3");

        label2 = document.createElement("label");
        label2.setAttribute("for", "edadNino" + (i + 1));
        label2.textContent = "Edad del " + (i + 1) + "º niño/a";

        input2 = document.createElement("input");
        input2.setAttribute("type", "number");
        input2.setAttribute("class", "form-control");
        input2.setAttribute("id", "edadNino" + (i + 1));
        input2.setAttribute("required", "");

        divCol2.appendChild(label2);
        divCol2.appendChild(input2);
      }

      divRow.appendChild(divCol1);
      if (divCol2) {
        divRow.appendChild(divCol2);
      }

      camposEdadNinosContainer.appendChild(divRow);
    }
  }
}

// Llamada a la función al cargar el DOM
document.addEventListener("DOMContentLoaded", function() {
  const cantidadNinosInput = document.getElementById("cantidadNinos");

  // Agregar listener al input para generar campos de edad
  cantidadNinosInput.addEventListener("input", generarCamposEdadNinos);
});

