const tableBody = document.getElementById('tablebody');
document.addEventListener('DOMContentLoaded', async() => {
  await populateTable();
});
     async function populateTable() {
      try {
        const response = await fetch('http://localhost:3000/historialvacunas'); // Replace with your URL
        const data = await response.json();
        // Clear existing table rows (optional)
        tableBody.innerHTML = '';
        // Process and populate the table with data
        
        data.data.forEach(item => {
          const row = document.createElement('tr');
          
          // Create and append table cells for each data property
          for (const key in item) {
            const cell = document.createElement('td');
            if(key === "historialvacunasId"){
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
          const cellu = document.createElement('td');
          cellu.innerHTML = `
          ${(item.status) ? `<button id="deshabilitar-${item.historialvacunasId}" class="btn btn-warning btn-sm me-1">Deshabilitar</button>` 
          : `<button id="habilitar-${item.historialvacunasId}" class="btn btn-success btn-sm me-1">Habilitar</button>`}
          <button id="editar-${item.historialvacunasId}" class="btn btn-primary btn-sm me-1"><a style="text-decoration: none;" href="../../../../public/enums/registrohistorialvacunas.html?id${item.historialvacunasId}">Editar</a></button>
          <button id="eliminar-${item.historialvacunasId}" class="btn btn-danger btn-sm">Eliminar</button>
          `;
          row.appendChild(cellu);
          tableBody.appendChild(row);
          
        });        
    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
async function busqueda(){
  const urlAPI = "http://localhost:3000/historialvacunas"; // URL de la API
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
            if(key === "historialvacunasId"){
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
          };
          const cellu = document.createElement('td');
          cellu.innerHTML = `
          ${(item.status) ? `<button id="deshabilitar-${item.historialvacunasId}" class="btn btn-warning btn-sm me-1">Deshabilitar</button>` 
          : `<button id="habilitar-${item.historialvacunasId}" class="btn btn-success btn-sm me-1">Habilitar</button>`}
          <button id="editar-${item.historialvacunasId}" class="btn btn-primary btn-sm me-1"><a style="text-decoration: none;" href="../../../../public/enums/registrohistorialvacunas.html?id${item.historialvacunasId}">Editar</a></button>
          <button id="eliminar-${item.historialvacunasId}" class="btn btn-danger btn-sm">Eliminar</button>
          `;
          row.appendChild(cellu);
          tablaCuerpo.appendChild(row);
      });
    });
  })
  .catch(error => console.error('Error:', error));
}
busqueda();