$(document).ready(function() {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true
    });

    // Obtén referencias a los botones de descarga
    var downloadButton = document.getElementById('downloadButton');
    var downloadManualButton = document.getElementById('downloadManualButton');

    // Agrega eventos de clic a los botones
    downloadButton.addEventListener('click', function(event) {
        handleDownloadButtonClick(event, 'apk/GuiApp.apk', 'GuiApp.apk');
    });

    downloadManualButton.addEventListener('click', function(event) {
        handleDownloadButtonClick(event, 'documents/ManualGuiApp.pdf', 'ManualGuiApp.pdf');
    });

    console.log('¡Bienvenido a GuiApp!');
});

function handleDownloadButtonClick(event, fileURL, fileName) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();

    // Crea un enlace temporal para la descarga
    var downloadLink = document.createElement('a');
    downloadLink.href = fileURL;
    downloadLink.download = fileName;

    // Simula el clic en el enlace temporal
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Muestra un mensaje superpuesto utilizando SweetAlert2
    Swal.fire({
        icon: 'success',
        title: 'Descarga iniciada',
        text: '¡Disfruta de GuiApp!',
    });
}

