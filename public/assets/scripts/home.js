// Obtener el texto del textarea
const publicacionBtn = document.getElementById('publicacion-btn');
const publicacionesContainer = document.querySelector('.main__publicaciones-container')

publicacionBtn.addEventListener('click', (event) => {
    const texto = document.querySelector('.main__nueva-publicacion-text').value;
    if (texto !== "") {
        // Crear una nueva publicación
        const nuevaPublicacion = document.createElement('div');
        nuevaPublicacion.classList.add('main__publicacion');
    
        const fechaActual = new Date().toLocaleDateString();
    
        nuevaPublicacion.innerHTML = `
            <div class="main__publicacion-header">
                <span class="main__publicacion-username">Admin</span>
                <span class="main__publicacion-date">${fechaActual}</span>
            </div>
            <div class="main__publicacion-body">
                <p class="main__publicacion-text">${texto}</</p>
            </div>
            <div class="main__publicacion-footer">
                <div class="main__publicacion-interaction">
                    <button class="main__publicacion-button heart-btn">
                        <i class="fa-solid fa-heart"></i> <span class="main__publicacion-interaction-count">0</span>
                    </button>
                    <button class="main__publicacion-button comment-btn">
                        <i class="fa-solid fa-comment"></i> <span class="main__publicacion-interaction-count">0</span>
                    </button>
                    <button class="main__publicacion-button share-btn">
                        <i class="fa-solid fa-share"></i> <span class="main__publicacion-interaction-count">0</span>
                    </button>
                </div>
            </div>
        `;
    
        // Agregar la nueva publicación al contenedor
        publicacionesContainer.insertBefore(nuevaPublicacion, publicacionesContainer.firstChild);
    
        // Limpiar el textarea
        document.querySelector('.main__nueva-publicacion-text').value = '';
    }
});