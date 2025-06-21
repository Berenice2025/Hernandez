// Función para actualizar hora y fecha
function actualizarFechaHora() {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString();
  const fecha = ahora.toLocaleDateString();

  document.getElementById('hora').textContent = hora;
  document.getElementById('fecha').textContent = fecha;
}

// Función para obtener ubicación del usuario
function obtenerUbicacion() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        document.getElementById('ubicacion').textContent = 
          `Latitud: ${latitude.toFixed(3)}, Longitud: ${longitude.toFixed(3)}`;
      },
      (error) => {
        document.getElementById('ubicacion').textContent = 'No se pudo obtener la ubicación';
      }
    );
  } else {
    document.getElementById('ubicacion').textContent = 'Geolocalización no soportada';
  }
}

// Ejecutar funciones
actualizarFechaHora();
obtenerUbicacion();
setInterval(actualizarFechaHora, 1000); // actualiza cada segundo
