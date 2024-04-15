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
        const body = document.createElement('tbody');
        // Process and populate the table with data
        
        data.data.forEach(item => {
          const row = document.createElement('tr');
          
          // Create and append table cells for each data property
          for (const key in item) {
            const cell = document.createElement('td');
            if(key === "status"){
              if(item[key] === true){
                cell.textContent = "Activo";
              }else{
                cell.textContent = "Inactivo";
              }
            }else{
              cell.textContent = item[key];
            }            
            row.appendChild(cell);
          }
          body.appendChild(row);
          
        });
        tableBody.appendChild
        tableBody.appendChild(body);
    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
