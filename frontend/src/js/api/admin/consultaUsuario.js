async function get(){
    await fetch('http://localhost:3000/tipousuario')
     .then(response => response.json())
     .then(data => {
       populateTable(data.data);
     })
     .catch(error => {
       console.error('Error fetching data:', error);
     });
     
     }
     function populateTable(data) {
     const tableBody = document.getElementById('table-body');

     // Clear existing rows
     //tableBody.innerHTML = '';

     // Add a row for each data item
     data.forEach(item => {
        console.log(item);
       const row = document.createElement('tr');
       console.log(item)
       // Create and append table cells for each data property
       for (const key in item) {
         const cell = document.createElement('td');
         cell.textContent = item[key];
         row.appendChild(cell);
       }

       tableBody.appendChild(row);
     });
   }
    
   get();