//Esto es para recibir la informacion del precio y nombre del servcio al localstorage. Esto es para el carrito hml
document.addEventListener('DOMContentLoaded', function () {
    // Recuperar el nombre y el precio del servicio desde localStorage
    var nombreServicio = localStorage.getItem('nombreServicio');
    var precioServicio = localStorage.getItem('precioServicio');

    // Llenar los campos de servicio y precio en el formulario con la información obtenida
    var servicioInput = document.getElementById("servicio");
    if (servicioInput) {
        servicioInput.value = nombreServicio;
    } else {
        console.error("No se encontró el campo de entrada con el id 'servicio'.");
    }
    document.getElementById("precio").value = precioServicio;
});


//ocultar los campos de la tarjeta si el metodo de pago seleccionado es efectivo
function togglePaymentDetails(select) {
    var paymentDetails = document.getElementById("paymentDetails");
    if (select.value === "Efectivo") {
        paymentDetails.style.display = "none"; // Oculta la sección de datos de pago si se selecciona efectivo
    } else if (select.value === "Tarjeta") {
        paymentDetails.style.display = "block"; // Muestra la sección de datos de pago si se selecciona tarjeta de crédito
    }
}

var paymentMethodSelect = document.getElementById("paymentMethod");
paymentMethodSelect.addEventListener("change", function () {
    togglePaymentDetails(this);
});


// Función para calcular el total y actualizar el método de pago
function calcularTotal() {
    var servicio = document.getElementById("servicio").value;
    var precio = parseFloat(document.getElementById("precio").value);
    var metodoPago = document.getElementById("paymentMethod").value; // Obtener el método de pago seleccionado
    var preferenciaEntrega = document.getElementById("deliveryMethod").value; // Obtener la preferencia de entrega seleccionada
    var delivery = 0; // Inicializar el costo de entrega en 0

    // Verificar si se seleccionó envío a domicilio y agregar el costo correspondiente
    if (preferenciaEntrega === "delivery") {
        delivery = 500; // Costo de entrega cuando se elige envío a domicilio
    }

    // Actualizar el método de pago mostrado en el resumen del pago
    document.getElementById("metodoPagoPago").innerText = metodoPago;

    // Calculamos el ITBIS
    var itbis = precio * 0.18; // Suponiendo que el ITBIS es del 18%

    // Verificamos si el precio es un número válido
    if (isNaN(precio)) {
        precio = 0; // Establecemos un valor predeterminado
    }

    // Verificamos si el ITBIS es un número válido
    if (isNaN(itbis)) {
        itbis = 0; // Establecemos un valor predeterminado
    }

    // Calculamos el total sumando precio, ITBIS y delivery
    var total = precio + itbis + delivery;

    // Mostramos los resultados en el formulario
    document.getElementById("precioPago").innerText = precio.toFixed(2);
    document.getElementById("itbisPago").innerText = itbis.toFixed(2);
    document.getElementById("deliveryPago").innerText = delivery.toFixed(2); // Mostrar el costo de delivery
    document.getElementById("totalPago").innerText = total.toFixed(2);
}

// Llamamos a la función para calcular el total cuando se cargue la página
window.onload = function () {
    calcularTotal();
};

// Actualizamos el cálculo del total y el método de pago cada vez que cambie la preferencia de entrega o el método de pago
document.getElementById("deliveryMethod").addEventListener("change", calcularTotal);

// Función para actualizar el resumen del pago con el servicio y el método de pago seleccionados
function actualizarResumen() {
    // Obtener el nombre del servicio almacenado en localStorage
    var nombreServicio = localStorage.getItem('nombreServicio');

    // Obtener el precio del servicio del campo de precio en el formulario
    var precioServicio = parseFloat(document.getElementById("precio").value);

    // Actualizar el servicio y el método de pago en el resumen del pago
    document.getElementById("servicioPago").innerText = nombreServicio;
    document.getElementById("metodoPagoPago").innerText = precioServicio;
}

// Llamamos a la función para actualizar el resumen del pago cuando se cargue la página
window.onload = function () {
    actualizarResumen(); // Actualizamos el resumen al cargar la página
};

// Actualizamos el resumen del pago cada vez que cambie la preferencia de entrega o el método de pago
document.getElementById("deliveryMethod").addEventListener("change", actualizarResumen);
document.getElementById("paymentMethod").addEventListener("change", actualizarResumen);