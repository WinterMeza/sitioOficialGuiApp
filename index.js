$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 800,
        arrows: false,
        dots: true
    });

    function showDownloadMessage() {
        // Muestra un mensaje superpuesto utilizando SweetAlert2
        Swal.fire({
            icon: 'success',
            title: 'Descarga iniciada',
            text: '¡Disfruta de GuiApp!',
        });
    }

    console.log('¡Bienvenido a GuiApp!');
});
