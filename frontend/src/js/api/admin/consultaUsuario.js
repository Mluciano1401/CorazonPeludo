const tableBody = document.getElementById('tablebody');
document.addEventListener('DOMContentLoaded', async() => {
  await populateTable();
});
     async function populateTable() {
      try {
        const response = await fetch('http://localhost:3000/tipousuario'); // Replace with your URL
        const data = await response.json();
        // Clear existing table rows (optional)
        tableBody.innerHTML = '';
        // Process and populate the table with data
        
        data.data.forEach(item => {
          const row = document.createElement('tr');
          
          // Create and append table cells for each data property
          for (const key in item) {
            const cell = document.createElement('td');
            if(key === "tipoUsuarioId"){
              cell.style.fontWeight = 800;
            }
            if(key === "status"){
              if(item[key] === true){
                cell.textContent = "Activo";
                cell.style.color = "green";
              }else{
                cell.textContent = "Inactivo";
                cell.style.color = "red";
              }
              cell.style.fontWeight = 800;
            }else{
              cell.textContent = item[key];
            }   
            cell.classList.add("table-light");        
            row.appendChild(cell);
          }
          tableBody.appendChild(row);
          
        });
        
    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
async function busqueda(){
  const urlAPI = "http://localhost:3000/tipousuario"; // URL de la API
const buscador = document.getElementById("buscador");
const tablaCuerpo = document.querySelector('tbody');

await fetch(urlAPI)
  .then(response => response.json())
  .then(data => {
    let usuarios = data.data; // Copia del array original

    buscador.addEventListener('input', () => {
      const texto = buscador.value.toLowerCase();
      const usuariosFiltrados = usuarios.filter(usuario => {
        return (
          usuario.descripcion.toLowerCase().includes(texto)
        );
      });

      tablaCuerpo.innerHTML = ''; // Vaciar el cuerpo de la tabla
      usuariosFiltrados.forEach(item => {
        const row = document.createElement('tr');
          
          // Create and append table cells for each data property
          for (const key in item) {
            const cell = document.createElement('td');
            if(key === "tipoUsuarioId"){
              cell.style.fontWeight = 800;
            }
            if(key === "status"){
              if(item[key] === true){
                cell.textContent = "Activo";
                cell.style.color = "green";
              }else{
                cell.textContent = "Inactivo";
                cell.style.color = "red";
              }
              cell.style.fontWeight = 800;
            }else{
              cell.textContent = item[key];
            }   
            cell.classList.add("table-light");        
            row.appendChild(cell);
          }
          tablaCuerpo.appendChild(row);
      });
    });
  })
  .catch(error => console.error('Error:', error));
}
busqueda();