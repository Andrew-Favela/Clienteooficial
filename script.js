// Inicializamos la librería de animaciones al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 800, // Duración de las animaciones en milisegundos (0.8 segundos)
        once: true,    // La animación se ejecuta solo una vez al bajar
        offset: 100    // Distancia (en píxeles) para que se dispare la animación
    });
});
