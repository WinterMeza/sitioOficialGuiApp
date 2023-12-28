$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000, // Cambiado a 2000 milisegundos (2 segundos)
        arrows: false,
        dots: true
    });

    // Obtén una referencia al botón de descarga
    var downloadButton = document.getElementById('downloadButton');

    // Agrega un evento de clic al botón
    downloadButton.addEventListener('click', function(event) {
        // Evita el comportamiento predeterminado del enlace
        event.preventDefault();

        // Intenta iniciar la descarga
        try {
            var apkLink = "apk/GuiApp.apk";
            // Redirige la ventana a la URL del archivo APK
            window.location.href = apkLink;

            // Muestra un mensaje de éxito si la descarga fue exitosa
            Swal.fire({
                icon: 'success',
                title: 'Descarga iniciada',
                text: '¡Disfruta de GuiApp!',
            });
        } catch (error) {
            // Muestra un mensaje de error si la descarga falla
            Swal.fire({
                icon: 'error',
                title: 'Error de descarga',
                text: 'No se pudo descargar la aplicación. Por favor, inténtalo de nuevo más tarde.',
            });
        }
    });

    console.log('¡Bienvenido a GuiApp!');
});
