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