const form = document.getElementById('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Recopila los datos del formulario
  const user = document.getElementById('user').value;
  const password = document.getElementById('password').value;
  // Crea una solicitud HTTP
  const url = 'http://localhost:3000/usuario/login';
  const data = { 
      userName: user,
      password: password
  };
  try {
    console.log(data);
    console.log(JSON.stringify(data));
    const response = await fetch(url, { // Replace with your API URL
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      window.location.href = 'index.html'; // Clear and concise redirection
      console.log('Login successful! Redirected to index.html');
      // Clear form after successful submission
    } else {
      console.error('Error:', await response.text()); // Log detailed error
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
