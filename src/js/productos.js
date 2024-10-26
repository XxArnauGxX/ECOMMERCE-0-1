document.addEventListener('DOMContentLoaded', function() {
    fetch('../js/productos.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let productosList = document.getElementById('productos-list');

            if (!productosList) {
                console.error('El elemento con id "productos-list" no se encontró.');
                return;
            }

            data.forEach(function(producto) {
                let productoDiv = document.createElement('div');
                productoDiv.className = 'producto';
                productoDiv.innerHTML = `
                    <div class="card">
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <p class="card-text"><strong>Precio:</strong> $${producto.precio}</p>
                            <p class="card-text"><strong>Categoría:</strong> ${producto.categoria}</p>
                            <p class="card-text"><strong>Stock:</strong> ${producto.stock}</p>
                        </div>
                    </div>
                `;
                productosList.appendChild(productoDiv);
            });
        })
        .catch(function(error) {
            console.error('Error al cargar los productos:', error);
        });
});