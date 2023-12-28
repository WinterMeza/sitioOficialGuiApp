console.log('¡Bienvenido a GuiApp!');

// Obtén una referencia al botón de descarga
var downloadButton = document.getElementById('downloadButton');

// Agrega un evento de clic al botón
downloadButton.addEventListener('click', function() {
    // Muestra un mensaje superpuesto utilizando SweetAlert2
    Swal.fire({
        icon: 'success',
        title: 'Descarga iniciada',
        text: '¡Disfruta de GuiApp!',
    });

    // Puedes agregar lógica adicional aquí, como iniciar la descarga de la aplicación.
});
