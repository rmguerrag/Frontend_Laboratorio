const API_URL = 'https://backend-laboratorio-mvul.onrender.com/api/mensaje';

document.getElementById('btn').addEventListener('click', async () => {
  const salida = document.getElementById('resultado');
  salida.textContent = 'Consultando...';
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    salida.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    salida.textContent = 'Error al conectar con el backend.';
  }
});