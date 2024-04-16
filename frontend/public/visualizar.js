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



//   // JavaScript
// // Simulación de fechas y horas disponibles (puedes obtener estos datos de tu base de datos o de una API)
// const fechasDisponibles = ['2024-04-17', '2024-04-18', '2024-04-19'];
// const horasDisponibles = ['09:00', '10:00', '11:00', '15:00', '16:00'];

// // Función para mostrar fechas disponibles
// function mostrarFechasDisponibles() {
//   const fechasDiv = document.getElementById('fechasDisponibles');
//   fechasDiv.innerHTML = '<p>Fechas disponibles:</p>';
//   fechasDisponibles.forEach(fecha => {
//     const p = document.createElement('p');
//     p.textContent = fecha;
//     fechasDiv.appendChild(p);
//   });
// }

// // Función para mostrar horas disponibles
// function mostrarHorasDisponibles() {
//   const horasDiv = document.getElementById('horasDisponibles');
//   horasDiv.innerHTML = '<p>Horas disponibles:</p>';
//   horasDisponibles.forEach(hora => {
//     const p = document.createElement('p');
//     p.textContent = hora;
//     horasDiv.appendChild(p);
//   });
// }
