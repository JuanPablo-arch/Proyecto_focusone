document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("miFormulario");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita el envío por defecto

        const nombre = document.getElementById("name").value.trim();
        const correo = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("message").value.trim();

        // Validaciones
        if (nombre === "") {
            Swal.fire({
                icon: 'warning',
                title: 'Campo requerido',
                text: 'Por favor ingresa tu nombre.'
            });
            return;
        }

        if (!validarCorreo(correo)){
            Swal.fire({
                icon: 'error',
                title: 'Correo no válido',
                text: 'Por favor ingresa un correo electrónico válido.'
            });
            return;
        }

        if (mensaje.length < 10) {
            Swal.fire({
                icon: 'info',
                title: 'Mensaje muy corto',
                text: 'Tu mensaje debe tener al menos 10 caracteres.'
            });
            return;
        }

        // Si todo está bien
        Swal.fire({
            icon: 'success',
            title: 'Formulario enviado',
            text: 'Gracias por contactarnos. Te responderemos muy pronto.'
        }).then(() => {
            formulario.reset(); // 🧼 Limpiar campos del formulario
        });

        // formulario.submit();
    });

    function validarCorreo(correo) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo);
    }
});

