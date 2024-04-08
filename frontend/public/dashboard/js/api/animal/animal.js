document.getElementById('fetchData').addEventListener('click', fetchData);

function fetchData() {
    fetch('https://api.example.com/data') // Reemplaza con la URL de tu API
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('data').innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}