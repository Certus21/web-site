// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los botones de compra
    const buyButtons = document.querySelectorAll('.btn-success');

    buyButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            // Evita que el enlace haga una redirección
            event.preventDefault();

            // Obtiene el ID del modal asociado al botón
            const targetModalId = button.getAttribute('data-bs-target').substring(1);
            const targetModal = document.getElementById(targetModalId);

            if (targetModal) {
                // Muestra el modal usando Bootstrap
                const modal = new bootstrap.Modal(targetModal);
                modal.show();
            }
        });
    });
});
