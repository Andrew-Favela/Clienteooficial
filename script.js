document.addEventListener("DOMContentLoaded", function() {
    // 1. Inicializar AOS (Animaciones)
    AOS.init({
        duration: 800, 
        once: true,
        offset: 50 
    });

    // 2. Validaciones del formulario en tiempo real
    const inputNombre = document.getElementById('nombre');
    const inputTelefono = document.getElementById('telefono');
    const formulario = document.getElementById('formulario-contacto');

    // Validación Nombre: Solo letras y espacios
    inputNombre.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    });

    // Validación Teléfono: Solo números
    inputTelefono.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    // 3. Envío dual: WhatsApp y permitir que el formulario siga su curso por Email (Formspree)
    formulario.addEventListener('submit', function(e) {
        // Obtenemos los valores
        const nombre = inputNombre.value.trim();
        const telefono = inputTelefono.value.trim();
        const correo = document.getElementById('correo').value.trim();
        const contexto = document.getElementById('contexto').value.trim();

        // AQUÍ PONES TU NÚMERO DE WHATSAPP (Con código de país, ejemplo: 52 para México)
        const numeroWhatsApp = "528112580800"; 

        // Creamos el mensaje para WhatsApp
        const mensajeTexto = `¡Hola! Vengo de la página de Clienteo.%0A%0A*Mi nombre:* ${nombre}%0A*Teléfono:* ${telefono}%0A*Correo:* ${correo}%0A*Contexto de mi empresa:* ${contexto}`;

        // Generamos el enlace de WhatsApp
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeTexto}`;

        // Abrimos WhatsApp en una nueva pestaña
        window.open(urlWhatsApp, '_blank');

        // IMPORTANTE: No usamos e.preventDefault() aquí, 
        // por lo que el formulario también se enviará por correo vía Formspree 
        // de forma simultánea.
    });
});
