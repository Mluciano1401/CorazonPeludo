const tableBody = document.getElementById('tablebody');
document.addEventListener('DOMContentLoaded', async() => {
  await populateTable();
});
     async function populateTable() {
      try {
        const response = await fetch('http://localhost:3000/proveedor'); // Replace with your URL
        const data = await response.json();
        // Clear existing table rows (optional)
        tableBody.innerHTML = '';
        // Process and populate the table with data
        
        data.data.forEach(item => {
          const row = document.createElement('tr');
          
          // Create and append table cells for each data property
          for (const key in item) {
            const cell = document.createElement('td');
            if(key === "id"){
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
          ${(item.status) ? `<button id="deshabilitar-${item.id}" class="btn btn-warning btn-sm me-1">Deshabilitar</button>` 
          : `<button id="habilitar-${item.id}" class="btn btn-success btn-sm me-1">Habilitar</button>`}
          <button id="editar-${item.id}" class="btn btn-primary btn-sm me-1"><a style="text-decoration: none;" href="../../../../public/enums/registroProveedor.html?id${item.id}">Editar</a></button>
          <button id="eliminar-${item.id}" class="btn btn-danger btn-sm">Eliminar</button>
          `;
          row.appendChild(cellu);
          tableBody.appendChild(row);
          
        });        
    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
async function busqueda(){
  const urlAPI = "http://localhost:3000/proveedor"; // URL de la API
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
            if(key === "id"){
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
          ${(item.status) ? `<button id="deshabilitar-${item.id}" class="btn btn-warning btn-sm me-1">Deshabilitar</button>` 
          : `<button id="habilitar-${item.id}" class="btn btn-success btn-sm me-1">Habilitar</button>`}
          <button id="editar-${item.id}" class="btn btn-primary btn-sm me-1"><a style="text-decoration: none;" href="../../../../public/enums/registroProveedor.html?id${item.id}">Editar</a></button>
          <button id="eliminar-${item.id}" class="btn btn-danger btn-sm">Eliminar</button>
          `;
          row.appendChild(cellu);
          tablaCuerpo.appendChild(row);
      });
    });
  })
  .catch(error => console.error('Error:', error));
}
busqueda();
tableBody.addEventListener('click', (event) => {
  if (event.target.id.startsWith('editar-')) {
    const userId = event.target.id.split('-')[1]; // Extract user ID from button ID

    // Handle edit functionality (replace with your logic)
    // You can open a modal, redirect to an edit page with the user ID as a parameter, etc.
    window.location.href = `../../../../../../frontend/public/enums/registroProveedor.html?id=${userId}`;
    console.log(`Edit user with ID: ${userId}`); // Example placeholder
  }
});