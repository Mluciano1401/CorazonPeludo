async function getData(){
    await fetch('http://localhost:3000/logacciones') // Replace with your actual backend URL
    .then(response => response.json()) // Parse JSON response
    .then(data => {
      // Process and populate the select options
      populateSelectOptions(data);
      const select = document.getElementById('tipoUser');
      select.addEventListener('change', () => {
        const selectedId = select.value;
        const selectedData = data.data.find(item => item.logaccionesId === selectedId); // Find selected item
        if (selectedData) {
          const dataDisplay = document.getElementById('data-display');
          dataDisplay.textContent = JSON.stringify(selectedData, null, 2); // Display selected data
        }
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    
  }
  function populateSelectOptions(data) {
    const select = document.getElementById('tipoUser');
    // Clear existing options
    select.options.length = 0;
  
    // Add an option for each data item
    data.data.forEach(item => {
      const option = document.createElement('option');
      option.value = item.logaccionesId; // Replace with your data item's ID property
      option.text = item.descripcion; // Replace with your data item's label property
      select.appendChild(option);
    });
  }
  
  
  getData();