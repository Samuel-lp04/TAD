

document.addEventListener('DOMContentLoaded', function () {
    
    // 1. Inicializar Tooltips (Globitos de información)
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // 2. Inicializar y mostrar el Toast (Notificación de Vinculacañas en Roshar)
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
        // Creamos el toast
        var toast = new bootstrap.Toast(toastEl)
        // Lo mostramos automáticamente si existe en la página
        toast.show()
        return toast
    })

    console.log("Archivo Arcanum inicializado.");
});