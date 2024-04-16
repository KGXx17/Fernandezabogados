//Esto es para mandar la informacion del precio y nombre del servcio al localstorage. Esto es para los servicos html
document.getElementById('btn-solicitar-servicio').addEventListener('click', function() {
    var nombreServicioElement = document.getElementById('nombre-servicio');
    if (nombreServicioElement) {
        var nombreServicio = nombreServicioElement.innerText.trim();
        if (nombreServicio !== "") {
            var precioServicio = this.getAttribute('data-precio'); // Obtener el precio del servicio del atributo data-precio del botón
            localStorage.setItem('nombreServicio', nombreServicio);
            localStorage.setItem('precioServicio', precioServicio); // Guardar el precio del servicio en el almacenamiento local
            window.location.href = '../carritoform.html'; // esta es la ruta correcta a tu formulario
        } else {
            console.error("El elemento 'nombre-servicio' está vacío.");
        }
    } else {
        console.error("No se encontró el elemento con el id 'nombre-servicio'.");
    }
});

    