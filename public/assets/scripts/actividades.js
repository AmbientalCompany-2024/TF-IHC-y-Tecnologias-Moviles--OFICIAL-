// document.addEventListener('DOMContentLoaded', function() {
//     // Obtiene todos los botones "Asistir a la actividad"
//     const buttons = document.querySelectorAll('.main__actividad-button');

//     buttons.forEach(button => {
//         button.addEventListener('click', function() {
//             // Obtiene el div de la actividad correspondiente al botón clickeado
//             const actividad = button.closest('.main__actividad');
//             // Mueve la actividad al contenedor "Mis Actividades"
//             const misActividadesCtn = document.getElementById('misActividadesCtn');
//             misActividadesCtn.appendChild(actividad);
//             // Elimina el botón de la actividad
//             button.remove();
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Obtiene todos los botones "Asistir a la actividad"
    const buttons = document.querySelectorAll('.main__actividad-button');
    const noActivitiesMessage = document.getElementById('noActivitiesMessage');
    const misActividadesCtn = document.getElementById('misActividadesCtn');

    // Función para verificar y actualizar el mensaje "noActivitiesMessage"
    function updateNoActivitiesMessage() {
        if (misActividadesCtn.children.length > 1) {
            noActivitiesMessage.style.display = 'none';
        } else {
            noActivitiesMessage.style.display = 'block';
        }
    }

    // Actualiza el mensaje al cargar la página
    updateNoActivitiesMessage();

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtiene el div de la actividad correspondiente al botón clickeado
            const actividad = button.closest('.main__actividad');
            // Mueve la actividad al contenedor "Mis Actividades"
            misActividadesCtn.appendChild(actividad);
            // Elimina el botón de la actividad
            button.remove();
            // Actualiza el mensaje
            updateNoActivitiesMessage();
        });
    });
});
